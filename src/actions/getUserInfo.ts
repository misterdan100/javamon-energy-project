"use server";

import { users } from "@/data/defaultData";
import { cookies } from "next/headers";
import { jwtVerify } from 'jose'
import { apiAxios } from "@/lib/axios";

type Props = {
  rol: "admin" | "user";
};

export const getUserInfo = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("javamon-jwt")?.value;

  if (!token) {
    throw new Error("Token no encontrado");
  }

  // verify token
  try {
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || "your-hardcoded-secret"
    );
    if (!secret) {
      throw new Error("JWT_SECRET no está definido");
    }

    const { payload } = await jwtVerify(token, secret);
    
    const {data: user} = await apiAxios(`/users/${payload.id}`)

    if(!user) {
        return false
    }

    return user
  } catch (error) {
    console.log("Error al verificar el token:", error);

  }

};
