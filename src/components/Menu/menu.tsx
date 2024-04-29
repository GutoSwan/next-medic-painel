"use client"
import { usePathname } from "next/navigation"
import React from "react"

const Menu: React.FC = () => {
  const pathname = usePathname()
  return pathname === "/" ? (
    <> </>
  ) : (
    <main className="bg-gradient-to-b from-cyan-500 to-blue-700 h-[100vh] flex flex-col items-center">
      <div className="text-white text-4xl mt-8 text-blue-500 text-3xl font-bold mb-4">
        Hospital
      </div>
      <div style={{ marginTop: "200px" }}>Avisos</div>
      <div style={{ marginTop: "20px" }}>Pacientes</div>
      <div style={{ marginTop: "20px" }}>Prestadores</div>
      <div style={{ marginTop: "20px" }}>
        Salas de cirurgia e Centros cirúrgicos
      </div>
      <div style={{ marginTop: "20px" }}>Relatórios</div>
    </main>
  )
}

export default Menu
