import { Navbar } from "@/components";
import { projectInfo } from "@/config/projectInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Cargar datos | ${projectInfo.titlePage}`
}

export default function LoadDataPage() {
  
  
  return (
    <div>
        <Navbar >Cargar datos</Navbar>
      LoadDataPage
    </div>
  )
}