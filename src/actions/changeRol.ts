'use server'

import axios, { AxiosError } from "axios"

export const changeRol = async (id: string, rol: string) => {
    try {
        const url = `https://67b326f4bc0165def8d01962.mockapi.io/api/users/${id}`
        const user = await axios.put(url, {
            rol: rol
        })

        console.log(user.data)
        return user.data
        
    } catch (error) {
        console.log(error)
    }
}