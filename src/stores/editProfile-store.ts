import { create } from "zustand"

type Store = {
    editingProfile: boolean,
    changeEditMode: (newState: boolean) => void
}

export const useEditProfileStore = create<Store>()((set) => ({
    editingProfile: false,
    changeEditMode: (newState) => set({
        editingProfile: newState
    }) 
}))