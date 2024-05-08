"use client"
import { usePathname } from "next/navigation"
import React from "react"
import avisosIcon from "../../assets/icons/avisosIcon.svg"
import heartblue from "../../assets/icons/heartblue.svg"
import pacientesIcon from "../../assets/icons/people.svg"
import peopleblue from "../../assets/icons/peopleblue.svg"
import prestadoresIcon from "../../assets/icons/provider.svg"
import providersblue from "../../assets/icons/providerblue.svg"
import room from "../../assets/icons/room.svg"
import roomblue from "../../assets/icons/roomblue.svg"
import relatoriosIcon from "../../assets/icons/report.svg"
import reportblue from "../../assets/icons/reportblue.svg"
import Image from "next/image"
import Link from "next/link"

const Menu: React.FC = () => {
  const pathname = usePathname()
  return pathname === "/" ? (
    <> </>
  ) : (
    <main className="bg-gradient-to-b from-cyan-500 to-blue-700 h-[100vh] flex flex-col p-8 text-white">
      <div
        style={{ fontSize: "3rem" }}
        className="text-white mt-10 text-blue-500 font-bold mb-4"
      >
        Hospital S
      </div>
      <Link href={"warning"}>
        <div className="flex items-center mt-20 text-lg">
          <Image
            src={pathname.includes("warning") ? heartblue.src : avisosIcon.src}
            width={50}
            height={50}
            alt="Avisos"
            className="mr-4 w-6 h-6"
          />
          <span className={pathname.includes("warning") ? "text-sky-500	" : ""}>
            Avisos
          </span>
        </div>
      </Link>
      <Link href={"patient"}>
        <div className="flex items-center mt-4 text-lg">
          <Image
            src={
              pathname.includes("patient") ? peopleblue.src : pacientesIcon.src
            }
            width={50}
            height={50}
            alt="Pacientes"
            className="mr-4 w-6 h-6"
          />
          <span className={pathname.includes("patient") ? "text-sky-500" : ""}>
            Pacientes
          </span>
        </div>
      </Link>
      <Link href={"providers"}>
        <div className="flex items-center mt-4 text-lg">
          <Image
            src={
              pathname.includes("providers")
                ? providersblue.src
                : prestadoresIcon.src
            }
            width={50}
            height={50}
            alt="Prestadores"
            className="mr-4 w-6 h-6"
          />
          <span
            className={pathname.includes("providers") ? "text-sky-500	" : ""}
          >
            Prestadores
          </span>
        </div>
      </Link>
      <Link href={"roms"}>
        <div className="flex items-center mt-4 text-lg">
          <Image
            src={pathname.includes("roms") ? roomblue.src : room.src}
            width={50}
            height={50}
            alt="Salas"
            className="mr-4 w-6 h-6"
          />
          <span className={pathname.includes("roms") ? "text-sky-500	" : ""}>
            Salas de cirurgia e Centros cirúrgicos
          </span>
        </div>
      </Link>
      <Link href={"reports"}>
        <div className="flex items-center mt-4 text-lg">
          <Image
            src={pathname.includes("reports") ? reportblue.src : relatoriosIcon}
            width={50}
            height={50}
            alt="Relatórios"
            className="mr-4 w-6 h-6"
          />
          <span className={pathname.includes("reports") ? "text-sky-500	" : ""}>
            Relatórios
          </span>
        </div>
      </Link>
    </main>
  )
}

export default Menu
