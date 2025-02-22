"use client";

import { changeRol } from "@/actions/changeRol";
import { useRolModalStore } from "@/stores";
import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

export const RolModal = () => {
  const isModalOpen = useRolModalStore((state) => state.isModalOpen);
  const openCloseModal = useRolModalStore((state) => state.openCloseModal);
  const datosUsuario = useRolModalStore((state) => state.datosUsuario);
  const modifyUserData = useRolModalStore((state) => state.modifyUserData);

  const router = useRouter()

  const handleChange = async () => {
    const changeRolFn: any = await changeRol(datosUsuario.id, datosUsuario.rolActual === 'admin' ? 'user' : 'admin')
    revalidatePath('/dashboard/users')
    openCloseModal(false)
  }

  return (
    <Dialog
      open={isModalOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={() => openCloseModal(false)}
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle
              as="h3"
              className="text-base font-medium text-gray-900"
            >
              Cambiar rol de { datosUsuario.nombre } ⚠️
            </DialogTitle>
            <p className="mt-2 text-sm text-gray-600">
              {`Desea cambiar el rol de ${datosUsuario.rolActual} a ${datosUsuario.rolActual === 'admin' ? 'usuario' : 'administrador'}?`}
            </p>
            <div className="mt-4 flex gap-2">
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-green-200 py-1.5 px-3 text-sm font-semibold text-green-700 shadow-inner shadow-green-300 focus:outline-none hover:bg-green-300 focus:ring-2 focus:ring-green-400"
                onClick={handleChange}
              >
                Cambiar rol
              </Button>
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-red-200 py-1.5 px-3 text-sm font-semibold text-red-700 shadow-inner shadow-red-300 focus:outline-none hover:bg-red-300 focus:ring-2 focus:ring-red-400"
                onClick={() => openCloseModal(false)}
              >
                Cancelar
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
