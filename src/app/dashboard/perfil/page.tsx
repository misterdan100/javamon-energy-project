import { getUserInfo } from "@/actions/getUserInfo";
import { Navbar } from "@/components";
import { projectInfo } from "@/config/projectInfo";
import { createAvatar } from "@/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProfileForm } from "./ProfileForm";

export const metadata: Metadata = {
  title: `Perfil | ${projectInfo.titlePage}`
}

export default async function ProfilePage() {
  const buttonClasses = "py-1.5 px-3 bg-gray-100 rounded-lg text-gray-500 hover:bg-gray-200 transition cursor-pointer border-[1px] border-gray-300"


  const user = await getUserInfo();

  if (!user) return notFound();

  return (
    <div>
      <Navbar >Perfil de usuario</Navbar>
      <div className="w-full h-full flex justify-center ">
        <div className="relative mt-6 bg-white rounded-lg border-[1px] shadow overflow-hidden mx-6 w-full md:min-w-[450px] md:w-auto">
          {/* banner */}
          <div className="h-32 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>

          <ProfileForm 
            user={user}
          />
          
        </div>
      </div>
    </div>
  );
}
