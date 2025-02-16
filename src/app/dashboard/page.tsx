import { Navbar } from "@/components";
import { projectInfo } from "@/config/projectInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Dashboard | ${projectInfo.titlePage}`
}

export default function DashboardPage() {
  
  
  return (
    <div

    >
      <Navbar >Dashboard</Navbar>

      <p>main content......</p>
      <p>main content......</p>
      <p>main content......</p>
      <p>main content......</p>
      <p>main content......</p>

    </div>
  )
}