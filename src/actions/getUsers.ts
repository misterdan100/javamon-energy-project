'use server'

// import { users } from "@/data/defaultData"
import axios from 'axios'

export const getUsers = async () => {
    try {
        const url = `https://67b326f4bc0165def8d01962.mockapi.io/api/users`;
        const users = await axios.get(url)

        return users.data
        
    } catch (error) {
        console.log('error in axios')
    }
    // return users
}