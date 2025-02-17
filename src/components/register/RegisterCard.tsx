"use client";

import { useForm } from "react-hook-form";
import { projectInfo } from "@/config/projectInfo";
import Link from "next/link";
import { ErrorMessage } from "../ErrorMessage";
import Image from "next/image";

export const RegisterCard = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ defaultValues: initialValues });
  const password = watch("password");

  const handleRegister = async (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-[448px] bg-white rounded-lg p-6 shadow-md text-gray-600">
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="flex flex-col gap-5"
      >
        <Image
          src="/img/logo_3.png"
          alt="logo"
          width={400}
          height={400}
          className="h-24 object-contain"
        />

        <div>
          <h4 className="text-2xl text-gray-500 font-bold">{`Inicia sesion en ${projectInfo.nombre}`}</h4>
          <p className="text-gray-400">Crea una cuenta para acceder!</p>
        </div>

        <div>
          <p>Correo</p>
          <input
            type="email"
            placeholder="E-mail..."
            className="bg-gray-100 w-full px-2 py-3 rounded-lg"
            {...register("email", {
              required: "Correo es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Correo invalido",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>

        <div>
          <p>Contraseña</p>
          <input
            type="password"
            placeholder="Contraseña..."
            className="bg-gray-100 w-full px-2 py-3 rounded-lg"
            {...register("password", {
              required: "Contraseña es obligatoria",
              minLength: { value: 6, message: "Minimo 6 caracteres" },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <div>
          <p>Confirmar contraseña</p>
          <input
            type="password"
            placeholder="Repetir contraseña..."
            className="bg-gray-100 w-full px-2 py-3 rounded-lg"
            {...register("confirmPassword", {
              required: "Contraseña es obligatoria",
              validate: (value) =>
                value === password || "Las contraseñas no coinciden",
            })}
          />
          {errors.confirmPassword && (
            <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
          )}
        </div>

        <button
          type="submit"
          className="font-bold text-white bg-lime-600 rounded-md py-3 hover:bg-lime-500"
        >
          Crear cuenta
        </button>

        <Link
          href="/login"
          className="text-center text-sm text-lime-700 hover:text-lime-500"
        >
          Iniciar sesion
        </Link>
      </form>
    </div>
  );
};
