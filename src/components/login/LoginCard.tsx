"use client";

import { projectInfo } from "@/config/projectInfo";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../ErrorMessage";
import Image from "next/image";
import { loginUser } from "@/actions/login";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";

interface FormData {
  email: string;
  password: string;
}

export const LoginCard = () => {
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: initialValues });

  const handleLogin = async (formData: FormData) => {
    setLoginError("");

    const res: { token?: string } | string | undefined = await loginUser({
      email: formData.email.trim().toLowerCase(),
      password: formData.password
    });

    if (typeof res === "string") {
      setLoginError(res);
      return;
    }

    if (res === undefined) {
      setLoginError("Error iniciando sesion, intente nuevamente");
      return;
    }

    // Guardar el token en las cookies
    setCookie(null, "javamon-jwt", res.token as string, {
      maxAge: 60 * 60, // 1 hora
      path: "/",
      secure: process.env.NODE_ENV === "production",
      httpOnly: false,
    });

    // router.push("/dashboard");
    window.location.href = '/dashboard';
  };

  return (
    <div className="w-[448px] bg-white rounded-lg p-6 shadow-md flex flex-col gap-5 text-gray-600">
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
        <p className="text-gray-400">
          Ingrese correo y contraseña para iniciar sesion!
        </p>
      </div>

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col gap-5"
      >
        <div>
          <p>Correo</p>
          <input
            type="text"
            placeholder="E-mail"
            className="bg-gray-100 w-full px-2 py-3 rounded-lg"
            {...register("email", {
              required: "Correo es requerido",
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
            placeholder="Contraseña"
            className="bg-gray-100 w-full px-2 py-3 rounded-lg"
            {...register("password", {
              required: "Contraseña es requerida",
              minLength: { value: 6, message: "Minimo 6 caracteres" },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        {loginError && <ErrorMessage>{loginError}</ErrorMessage>}

        <button
          type="submit"
          className="font-bold text-white bg-lime-600 rounded-md py-3 hover:bg-lime-500"
        >
          Iniciar Sesion
        </button>
      </form>

      <Link
        href="/register"
        className="text-center text-sm text-lime-600 hover:text-lime-500"
      >
        Crear una cuenta.
      </Link>

      <div
        className="flex flex-col items-center"
      >
        <p className="font-semibold">Usuario de prueba:</p>
        <p>Usuario: admin@correo.com</p>
        <p>Contraseña: 12345678</p>
      </div>
    </div>
  );
};
