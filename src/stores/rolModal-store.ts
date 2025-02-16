import { create } from "zustand";

type Store = {
    isModalOpen: boolean,
    datosUsuario: {
        nombre: string,
        rolActual: string,
        id: string,
    }
    openCloseModal: (newState: boolean) => void,
    modifyUserData: (datos: {
        nombre: string,
        rolActual: string,
        id: string,
    }) => void
}

export const useRolModalStore = create<Store>()((set) => ({
    isModalOpen: false,
    datosUsuario: {
        nombre: '',
        rolActual: '',
        id: '',
    },
    openCloseModal: (newState) => set({
        isModalOpen: newState
    }),
    modifyUserData: (datos) => set({
        datosUsuario: {
            ...datos
        }
    })
}))