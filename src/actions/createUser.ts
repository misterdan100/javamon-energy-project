'use server'

import { UserFromAPI } from "@/interfaces/types"
import { apiAxios } from "@/lib/axios"
import { isAxiosError } from "axios"
import jwt from 'jsonwebtoken'

type Props = {
    email: string,
    nombre: string,
    telefono: string,
    password: string
}

export const createUser = async ({email, password, nombre, telefono}: Props) => {
    try {

        const { data } = await apiAxios<UserFromAPI[]>('/users')

        const userExist = data.find(user => user.email === email)
        if(userExist) {
            return 'El email ya esta registrado'
        }

        const newUserData = {
            nombre,
            email,
            password,
            rol: 'user',
            telefono,
        }

        const { data: newUser } = await apiAxios.post<UserFromAPI>('/users', {
            ...newUserData
        })

        if(!newUser) {
            return 'Error creando usuario, intente nuevamente'
        }

        const newJWT = jwt.sign({
                id: newUser.id,
                email: newUser.email
            },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h'}   
        )
        newUser.token = newJWT

        const { data: res} = await apiAxios.put(`/users/${newUser.id}`, {
            token: newUser.token
        })

        if(!res) return undefined

        return res

        
        
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error(error.response?.data.error)
        }
    }


}