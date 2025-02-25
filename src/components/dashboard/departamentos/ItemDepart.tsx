'use client'

import { Energia } from "@/interfaces/dataTypes";
import { energyColors } from "@/lib/diccionarios";
import React, { useState } from "react";
import clsx from 'clsx'

interface Props {
    energia: Energia
    prodAnual: number
}



export const ItemDepart = ({energia, prodAnual}: Props) => {
    const { departamento, ciudad, estado, tipoEnergia, tecnologia, impactoAmbiental, produccionAnualEstimada } = energia

  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
        <div>
          <h2 className="font-medium text-gray-800 ">
            {departamento}
          </h2>
          <p className="text-sm font-normal text-gray-600 ">
            {ciudad}
          </p>
        </div>
      </td>
      <td className="px-12 py-4 text-sm font-bold whitespace-nowrap">
        <div 
            className={clsx("inline px-3 py-1 text-sm font-semibold rounded-full  gap-x-2", {
                "bg-violet-100 text-violet-500": energia.tipoEnergia === "Biocombustibles",
                "bg-fuchsia-100 text-fuchsia-500": energia.tipoEnergia === "Eólica",
                "bg-lime-100 text-lime-600": energia.tipoEnergia === "Geotérmica",
                "bg-cyan-100 text-cyan-500": energia.tipoEnergia === "Hidroeléctrica",
                "bg-amber-100 text-amber-600": energia.tipoEnergia === "Solar",
            })}
        >
          {tipoEnergia}
        </div>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div>
          <h4 className="text-gray-700 ">{tecnologia}</h4>
          <p className="text-gray-500 ">
            {`Impacto ambiental: ${impactoAmbiental}`}
          </p>
        </div>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div 
            className={clsx("inline px-3 py-1 text-sm font-semibold rounded-full  gap-x-2", {
                "bg-red-100 text-red-500": energia.estado === "En construcción",
                "bg-sky-100 text-sky-500": energia.estado === "En exploración",
                "bg-orange-100 text-orange-600": energia.estado === "En planeación",
                "bg-green-100 text-green-600": energia.estado === "Operativo",
            })}
        >
          {estado}
        </div>
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap flex flex-col justify-center items-star">
        <div className="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full ">
          <div 
            style={{width: `${prodAnual}%`}}
            className="bg-blue-500  h-1.5"
          ></div>
        </div>
          <p>{`${produccionAnualEstimada.toLocaleString()} MWh`}</p>
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg  hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};
