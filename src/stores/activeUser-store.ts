import { create } from "zustand"

type Store = {
    usuarioActivo: {
        id: string
        nombre: string
        email: string
        rol: string
    }
    changeActiveUser: ({id, nombre, email, rol}: {
        id: string,
        nombre: string,
        email: string,
        rol: string
    }) => void
}

export const activeUser = create<Store>()((set) => ({
    usuarioActivo: {
        id: '',
    nombre: '',
    email: '',
    rol: '',
    },
    changeActiveUser: ({id, nombre, email, rol}) => {
        if(id) {
            set({
                usuarioActivo: {
                    id,
                nombre,
                email,
                rol
                }
            })
            return
        } else {
            set({
                usuarioActivo: {
                    id: '',
                nombre: '',
                email: '',
                rol: ''
                }
            })
            return
        }
    }

}))