"use client";

import { useForm } from "react-hook-form";
import { projectInfo } from "@/config/projectInfo";
import Link from "next/link";
import { ErrorMessage } from "../ErrorMessage";
import Image from "next/image";
import { createUser } from "@/actions/createUser";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserFromAPI } from "@/interfaces/types";
import { setCookie } from "nookies";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  password: string;
  confirmPassword: string;
}

export const RegisterCard = () => {
  const [createError, setCreateError] = useState("");
  const router = useRouter();
  const initialValues = {
    email: "",
    nombre: "",
    telefono: "",
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

  const handleRegister = async (data: FormData) => {
    setCreateError("");
    const { confirmPassword, ...rest } = data;
    const user: UserFromAPI | string | undefined = await createUser(rest);

    if (typeof user === "string") {
      setCreateError(user);
      return;
    }

    if (user === undefined) {
      setCreateError("Error creando usuario, intente nuevamente");
      return;
    }

    // Guardar el token en las cookies
    setCookie(null, "javamon-jwt", user.token as string, {
      maxAge: 60 * 60, // 1 hora
      path: "/",
      secure: process.env.NODE_ENV === "production",
      httpOnly: false,
    });

    router.push("/dashboard");
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
          priority
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
          <p>Nombre:</p>
          <input
            type="text"
            placeholder="Nombre completo..."
            className="bg-gray-100 w-full px-2 py-3 rounded-lg"
            {...register("nombre", {
              required: "Nombre es obligatorio",
              minLength: { value: 3, message: "Minimo 6 caracteres" },
            })}
          />
          {errors.email && (
            <ErrorMessage>{errors.nombre?.message}</ErrorMessage>
          )}
        </div>

        <div>
          <p>Telefono</p>
          <input
            type="number"
            placeholder="3001231234"
            className="bg-gray-100 w-full px-2 py-3 rounded-lg"
            {...register("telefono")}
          />
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

        {createError && <ErrorMessage> {createError}</ErrorMessage>}

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
