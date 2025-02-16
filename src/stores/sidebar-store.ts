import { create } from "zustand"

type Store = {
    asideOpen: boolean,
    showAside: (newState: boolean) => void
}

export const useAsideStore = create<Store>()((set) => ({
    asideOpen: true,
    showAside: (newState) => set({
        asideOpen: newState
    })
}))