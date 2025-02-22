"use client";

import { getUserInfo } from "@/actions/getUserInfo";
import { useAsideStore } from "@/stores";
import { activeUser } from "@/stores/activeUser-store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  const buttonClasses =
    "p-1.5 bg-gray-100 rounded-lg text-gray-500 hover:bg-gray-200 transition cursor-pointer";

  const [user, setUser] = useState({ userName: "", userRol: "" });

  const asideOpen = useAsideStore((state) => state.asideOpen);
  const showAside = useAsideStore((state) => state.showAside);

  const changeActiveUser = activeUser( state => state.changeActiveUser);

  // track window size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const user = await getUserInfo();
      const nombre = user.nombre.split(" ")[0];
      const userRol = user.rol;
      

      setUser({ userName: nombre, userRol: userRol });
      changeActiveUser({
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol
      })
    };

    fetchUserInfo();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="z-10 flex-shrink-0 bg-white-50 dark:bg-darker w-full py-2 px-4 flex justify-between backdrop-blur-md shadow-sm">
      <div className="flex items-center gap-4">
        <IoChevronBackSharp
          size={44}
          className={`${buttonClasses} ${!asideOpen ? "rotate-180" : ""}`}
          onClick={() => showAside(!asideOpen)}
        />

        <h2 className="text-2xl font-bold text-gray-500">{children}</h2>
      </div>

      <Link href="/dashboard/perfil" className="flex items-center gap-4 pe-6">
        <p>
          {user.userName}
          <span className="text-red-700 text-sm italic"> ({user.userRol})</span>
        </p>
        <Image
          src="/img/default_avatar.png"
          width={50}
          height={50}
          alt="avatar photo"
          className="rounded-lg hover:scale-105 cursor-pointer transition w-[44px] h-[44px]"
        />
      </Link>
    </div>
  );
};
