"use client";

import { UserFormData } from "@/interfaces/types";
import { useEditProfileStore } from "@/stores";
import { createAvatar } from "@/utils";
import { useState } from "react";

type FormData = {
    nombre: string,
    email: string,
    telefono: string
}

export const ProfileForm = ({user}: {user: UserFormData}) => {
  const buttonClasses = "py-1.5 px-3 bg-gray-100 rounded-lg text-gray-500 hover:bg-gray-200 transition cursor-pointer border-[1px] border-gray-300";

  const editingProfile = useEditProfileStore( state => state.editingProfile)
  const changeEditMode = useEditProfileStore( state => state.changeEditMode)

  const initialData = {
    nombre: user.nombre,
    email: user.email,
    telefono: user.telefono
  }

  const [formData, setFormData] = useState<FormData>({
    nombre: user.nombre,
    email: user.email,
    telefono: user.telefono
  })


  const handleButton = () => {
    if(editingProfile === false) {
        changeEditMode(true)
    } else {
        changeEditMode(false)
        console.log(formData)
    }
  }

  const onChangeInputs = ({item, value}: {item: "nombre" | "email" | "telefono", value: string }) => {
    setFormData((prev) => ({
        ...prev,
        [item]: value
    }))
  }

  const handleCancel = () => {
    changeEditMode(false)
    setFormData(initialData)
  }


  return (
    <form className="p-6">
      {/* Photo, Name and rol */}
      <div className="flex  flex-col items-center translate-y-[-50px] ">
        <div className="w-16 h-16 rounded-full border-4 border-sky-600 flex justify-center items-center overflow-hidden bg-gray-200 mb-2">
          <p className="font-bold  p-1 text-gray-500 text-4xl">
            {createAvatar(user?.nombre)}
          </p>
        </div>
        <input 
            className={`${editingProfile ? 'border border-gray-400 rounded-lg' : ''} border border-transparent font-bold text-lg text-center`}
            value={formData.nombre}
            onChange={(e) => onChangeInputs({item: "nombre", value: e.target.value})}
            disabled={!editingProfile}
        />
        <p className="text-sm italic">({user.rol})</p>
      </div>

      {/* Datos */}
      <div className=" flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="id" className="text-gray-600">
            Id:
          </label>
          <input
            type="text"
            value={user.id}
            className="py-2 text-gray-500 border-[1px] border-transparent px-2 rounded-lg italic "
            disabled={true}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-600">
            E-mail:
          </label>
          <input
            type="text"
            value={formData.email}
            onChange={(e) => onChangeInputs({item: "email", value: e.target.value})}
            className="py-2 text-gray-700 border-[1px] px-2 rounded-lg"
            disabled={!editingProfile}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="id" className="text-gray-600">
            Telefono:
          </label>
          <input
            type="text"
            value={formData.telefono}
            onChange={(e) => onChangeInputs({item: "telefono", value: e.target.value})}
            className="py-2 text-gray-700 border-[1px] px-2 rounded-lg"
            disabled={!editingProfile}
          />
        </div>

        <button 
            type="button" 
            className={`${buttonClasses} mt-4 ${editingProfile ? 'border-green-500 text-green-500 bg-green-100' : ''}`}
            onClick={handleButton}
        >
          {editingProfile ? 'Guardar cambios' : 'Editar Usuario'}
        </button>

        {editingProfile && (  
            <button 
            type="button" 
            className={`${buttonClasses} mt-4 border-red-500 text-red-500 bg-red-100`}
            onClick={handleCancel}
            >
          Cancelar
        </button>
        )}


      </div>
    </form>
  );
};
