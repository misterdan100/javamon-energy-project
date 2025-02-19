'use server'

import { UserFromAPI } from "@/interfaces/types"
import { apiAxios } from "@/lib/axios"
import { isAxiosError } from "axios"
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server"


type Props = {
    email: string,
    password: string
}

export const loginUser = async ({email, password}: Props) => {

    try {
        const { data } = await apiAxios<UserFromAPI[]>('/users')

        const userExist = data.find(user => user.email === email)

        if(!userExist) {
            return 'Usuario no encontrado'
        }

        if( userExist.password !== password) {
            return 'Contraseña incorrecta'
        }

        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined');
        }

        const jwtUser = jwt.sign({
                id: userExist.id, email: userExist.email
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h'}
        )

        userExist.token = jwtUser

        const { data: res } = await apiAxios.put<UserFromAPI>(`/users/${userExist.id}`, {
            token: userExist.token
        })

        if(!res) return undefined

        return { token: jwtUser }
        
        
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error(error.response?.data.error)
        }
    }
    
}