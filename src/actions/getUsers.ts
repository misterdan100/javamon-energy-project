'use server'

import { users } from "@/data/defaultData"

export const getUsers = () => {
    return users
}