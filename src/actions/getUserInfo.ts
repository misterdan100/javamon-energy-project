'use server'

import { users } from "@/data/defaultData"

type Props = {
    rol: "admin" | "user"
}

export const getUserInfo = (rol: string) => {
    
    return users.find( user => user.rol === rol)
}