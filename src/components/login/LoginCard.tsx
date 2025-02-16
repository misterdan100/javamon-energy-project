'use client'

import { projectInfo } from "@/config/projectInfo"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { ErrorMessage } from "../ErrorMessage"

export const LoginCard = () => {

  const initialValues = {
    email: "",
    password: ""
  }

  const { register, handleSubmit, formState: {errors} } = useForm({defaultValues: initialValues});

  const handleLogin = async (formData: any) => {
    console.log(formData);
  }
  
  
  return (
    <div
        className="w-[448px] bg-white rounded-lg p-6 shadow-md flex flex-col gap-5 text-gray-600"
    >
      <div
        id="logo-login"
        className="text-lg font-bold text-gray-600 text-center"
      > 
        Logo..
      </div>

      <div>
        <h4
            className="text-2xl text-gray-500 font-bold"
        >{`Inicia sesion en ${projectInfo.nombre}`}</h4>
        <p
            className="text-gray-400"
        >Ingrese correo y contraseña para iniciar sesion!</p>
      </div>

      <form 
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col gap-5"
      >
        <div>
          <p>Correo</p>
          <input type="text" placeholder="E-mail"
              className="bg-gray-100 w-full px-2 py-3 rounded-lg"
              {...register("email", {
                required: "Correo es requerido",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Correo invalido"
                }
              })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        </div>
        <div>
          <p>Contraseña</p>
          <input type="password" placeholder="Contraseña"
              className="bg-gray-100 w-full px-2 py-3 rounded-lg"
              {...register("password", {
                required: "Contraseña es requerida",
                minLength: {value: 6, message: "Minimo 6 caracteres"}
              })}
          />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

        </div>

        <button 
          type="submit"
          className="font-bold text-white bg-green-700 rounded-md py-3 hover:bg-green-600"
        >
          Iniciar Sesion
        </button>

      </form>

      <Link href="/register"
        className="text-center text-sm text-green-700 hover:text-green-500"
      >
        Crear una cuenta.
      </Link>
    </div>
  )
}