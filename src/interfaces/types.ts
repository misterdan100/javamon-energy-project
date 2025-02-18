export type UserFormData = {
    id: string,
    nombre: string,
    rol: string,
    email: string,
    telefono: string,
    password: string,
}

export type UserFromAPI = {
    id: string,
    nombre: string,
    rol: string,
    email: string,
    telefono: string,
    password: string,
    token: string
}