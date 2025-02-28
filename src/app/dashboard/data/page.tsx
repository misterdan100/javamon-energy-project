import { EnergiesBreakdown, EnergyDepBarChart, Navbar, TypeEnergyBarChart4 } from "@/components";
import { projectInfo } from "@/config/projectInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Datos | ${projectInfo.titlePage}`
}

export default function DataPage() {
  
  
  return (
    <>
      <Navbar>Datos</Navbar>

      <div 
        id="main-content"
        className="flex-1 p-4 overflow-y-auto">

          <div
            className="grid lg:grid-cols-12 gap-4"
          >
            <EnergyDepBarChart />
            <TypeEnergyBarChart4 />
            <EnergiesBreakdown />


          </div>

      </div>

    </>
  )
}