import { Navbar } from "@/components";
import { projectInfo } from "@/config/projectInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Datos | ${projectInfo.titlePage}`
}

export default function DataPage() {
  
  
  return (
    <div>
        <Navbar >Datos</Navbar>
      DataPage
    </div>
  )
}