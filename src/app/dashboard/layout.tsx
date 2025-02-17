import { SideBar } from "@/components/dashboard/SideBar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const show = true;

  if (show)
    return (
      <>
        <div className="flex bg-gray-100 text-gray-900 dark:bg-dark dark:text-light h-full w-full">
          {/* full template div */}

          {/* Sidebar */}
          <SideBar />


          <div className="flex flex-col w-full overflow-y-scroll h-full justify-between">
            
            
            {children}
            <div
              className="flex justify-between items-center p-4 text-gray-500  w-full h-12 border-t-[1px] border-gray-300 bg-white"
            >
              <p
                className="hover:text-lime-700"
              >©2025 Green API</p>
              <p
                className="hover:text-lime-700"
              >Desarrollado por Javamon</p>
            </div>
          </div>
        </div>
      </>
    );

  return (
    <div className="flex h-full">
      <SideBar />
      <div>{children}</div>
    </div>
  );
}
