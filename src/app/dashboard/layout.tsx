import { SideBar } from "@/components/dashboard/SideBar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {



    return (
      <div className="flex bg-gray-100 text-gray-900 dark:bg-dark dark:text-light h-screen overflow-hidden">
        <SideBar />

        <div className="flex flex-col w-full h-full justify-between">
          {/* Navbar and main content */}
          <div className="flex flex-col flex-1 overflow-hidden">
            {children}
          </div>

          <div className="flex justify-between items-center p-4 text-gray-500 w-full h-12 border-t-[1px] border-gray-300 bg-white">
            <p className="hover:text-lime-700">©2025 Green API</p>
            <p className="hover:text-lime-700">Desarrollado por Javamon</p>
          </div>
        </div>
      </div>
    );

}
