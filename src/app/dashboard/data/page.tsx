import { EmpleadosStackedChart, EnergiesBreakdown, EnergyDepBarChart, ImpactoAmbientalRadarChart, InstalacionesLineChart, Navbar, TypeEnergyBarChart4 } from "@/components";
import { projectInfo } from "@/config/projectInfo";
import { Metadata } from "next";
import Link from "next/link";
import dataJSON from '@/data/data.json'

export const metadata: Metadata = {
  title: `Datos | ${projectInfo.titlePage}`
}

export default function DataPage() {

  // Función para generar un año aleatorio entre 1990 y 2022
function getRandomYear() {
  return Math.floor(Math.random() * (2022 - 1990 + 1)) + 1990;
}

// Agregar la propiedad fechaInstalacion a cada objeto de energía
dataJSON.energias.forEach(energia => {
  energia.fechaInstalacion = getRandomYear();
});
   
  
  return (
    <>
      <Navbar>Datos</Navbar>

      <div 
        id="main-content"
        className="flex-1 p-4 overflow-y-auto">

          <div
            className="grid lg:grid-cols-12 gap-4"
          >
            <div
              className="lg:col-span-12 flex flex-wrap gap-4"
            >
              <Link
                href='/dashboard/data/eficiencia'
                className="bg-white hover:bg-gray-200 font-semibold text-gray-600 border border-1 border-gray-300 px-6 py-4 rounded-lg transition"
              >Eficiencia</Link>
              <Link
                href='/dashboard/data/departamentos'
                className="bg-white hover:bg-gray-200 font-semibold text-gray-600 border border-1 border-gray-300 px-6 py-4 rounded-lg transition"
              >Tabla de Departamentos</Link>
            </div>
            <EnergyDepBarChart />
            <TypeEnergyBarChart4 />

            <EnergiesBreakdown />

            <InstalacionesLineChart />

            <EmpleadosStackedChart />

            <ImpactoAmbientalRadarChart />






          </div>

      </div>

    </>
  )
}