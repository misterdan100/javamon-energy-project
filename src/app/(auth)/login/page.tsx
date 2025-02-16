import { LoginCard } from "@/components";
import { projectInfo } from "@/config/projectInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Login | ${projectInfo.nombre}`
}

export default function LoginPage() {

  return (
    <div className="flex flex-col justify-center items-center p-6 w-full h-full">
      <LoginCard />
    </div>
  );
}
