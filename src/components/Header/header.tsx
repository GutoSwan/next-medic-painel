"use client"
import { usePathname } from "next/navigation"
import React from "react"

const Header: React.FC = () => {
  const pathname = usePathname()
  return pathname === "/" ? (
    <> </>
  ) : (
    <nav className="flex w-full justify-between">
      <div>Página inicial</div>
      <div className="flex">
        <div>Suporte</div>
        <div>Perfil</div>
      </div>
    </nav>
  )
}

export default Header
