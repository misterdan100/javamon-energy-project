'use client'

import { projectInfo } from "@/config/projectInfo";
import { useAsideStore } from "@/stores";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  IoAnalytics, IoCloudUpload, IoGrid, IoLogInOutline,
  IoPeopleSharp,
  IoPersonSharp
} from "react-icons/io5";

export const SideBar = () => {
  const asideOpen = useAsideStore( state => state.asideOpen)
  const showAside = useAsideStore( state => state.showAside)

  const router = useRouter()

  const itemClasses = "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-500 bg-gradient-to-r hover:bg-gray-100 transition"
  // const itemClasses = "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-green-600 to-green-400 hover:bg-gray-100"

  const handleClickItem = () => {
    if(window.innerWidth < 1024 && asideOpen === true) {
      showAside(false)

    }
  }

  const handleLogout = () => {
    router.replace('/login')
  }

  if(asideOpen) return (

      <aside className=" min-w-[250px] z-10 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] ">
        <div>
          <div className="-mx-6 px-6 py-4">
            <Link 
                href="/" 
                title="home"
                className="flex items-center gap-3 justify-center"
            >
              <Image
                src="/img/logo_1.jpg"
                width={100}
                height={100}
                className="w-20"
                alt="tailus logo"
                priority
              />
              <p className="font-bold text-3xl text-gray-500">{projectInfo.nombre}</p>
            </Link>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            
              <Link
                href="/dashboard"
                aria-label="dashboard"
                className={itemClasses}
                onClick={handleClickItem}
              >
                <IoGrid size={24} className="-ml-1 h-6 w-6" />
                <span className="-mr-1 font-medium">Dashboard</span>
              </Link>

              <Link
                href="/dashboard/data"
                aria-label="dashboard"
                className={itemClasses}
                onClick={handleClickItem}
              >
                <IoAnalytics size={24} className="-ml-1 h-6 w-6" />
                <span className="-mr-1 font-medium">Datos</span>
              </Link>

              <Link
                href="/dashboard/users"
                aria-label="dashboard"
                className={itemClasses}
                onClick={handleClickItem}
              >
                <IoPeopleSharp size={24} className="-ml-1 h-6 w-6" />
                <span className="-mr-1 font-medium">Usuarios</span>
              </Link>

              <Link
                href="/dashboard/load-data"
                aria-label="dashboard"
                className={itemClasses}
                onClick={handleClickItem}
              >
                <IoCloudUpload size={24} className="-ml-1 h-6 w-6" />
                <span className="-mr-1 font-medium">Cargar datos</span>
              </Link>


            
          </ul>
        </div>

        <div className="flex-col px-6 -mx-6 pt-4 flex justify-between items-center border-t">

          <Link 
          href="/dashboard/perfil"
          className={`${itemClasses} w-full`}
          onClick={handleClickItem}
          >
          <IoPersonSharp size={24} className="h-6 w-6"/>

            <span className="group-hover:text-gray-700">Perfil</span>
          </Link>


          <button 
            className={`${itemClasses} w-full`}
            onClick={handleLogout}
          >

            <IoLogInOutline size={24} className="h-6 w-6"/>

            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>

  );
};
