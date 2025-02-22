"use client";

import { useRolModalStore } from "@/stores";
import { activeUser } from "@/stores/activeUser-store";
import { createAvatar } from "@/utils";
import { IoCreateOutline } from "react-icons/io5";

type Props = {
  id: string;
  nombre: string;
  email: string;
  rol: string;
};

export const UserItem = (props: Props) => {
  const { nombre, email, rol, id } = props;

  const isModalOpen = useRolModalStore((state) => state.isModalOpen);
  const openCloseModal = useRolModalStore((state) => state.openCloseModal);
  const datosUsuario = useRolModalStore((state) => state.datosUsuario);
  const modifyUserData = useRolModalStore((state) => state.modifyUserData);

  const usuarioActivo = activeUser( (state) => state.usuarioActivo)

  const handleChangeRol = () => {
    openCloseModal(true)
    modifyUserData({
        nombre: nombre,
        id,
        rolActual: rol
    })
  }


  return (
    <tr key={id} className="hover:bg-gray-100 transition">
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 bg-slate-300 rounded-full flex justify-center items-center font-bold text-slate-600">
            <p>{createAvatar(nombre)}</p>
          </div>
          <div className="font-medium text-gray-800">{nombre}</div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{email}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div
          className={`${
            rol === "admin"
              ? "text-left font-medium text-red-500"
              : "text-left font-medium text-green-500"
          }`}
        >
          {rol}
        </div>
      </td>

      {usuarioActivo.rol === 'admin' && (
        <td>
        <IoCreateOutline
          size={20}
          className="cursor-pointer text-gray-500 hover:text-gray-800 transition hover:scale-105"
          onClick={handleChangeRol}
        />
      </td>
      ) }
      
    </tr>
  );
};
