"use client"
import { usePathname } from "next/navigation"
import Modal from "@/components/modal/page_profile"
import React from "react"

const Header: React.FC = () => {
  const pathname = usePathname()
  return pathname === "/" ? (
    <> </>
  ) : (
    <nav className="flex w-full justify-end px-[100px]">
      <div className="flex flex-row-reverse space-x-[100px] space-x-reverse">
        <Modal />
        <div>Suporte</div>
      </div>
    </nav>
  )
}

export default Header
