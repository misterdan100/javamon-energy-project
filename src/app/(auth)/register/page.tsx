import { RegisterCard } from "@/components";
import { projectInfo } from "@/config/projectInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Registrarse | ${projectInfo.nombre}`
}

export default function RegisterPage() {
  
  
  return (
      <div
        className="flex flex-col justify-center items-center p-6 w-full h-full"
      >
        <RegisterCard />

      </div>
  )
}