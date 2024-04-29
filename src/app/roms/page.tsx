import React from "react"

export default function Page() {
  return (
    <main className="h-full w-full flex items-center justify-center">
      <div className="w-fit">
        <div className="flex justify-between items-center py-2">
          <div>Salas e Centros cirúrgicos</div>
          <div>Adicionar nova sala ou centro cirúrgico</div>
        </div>
        <div className="bg-[#fff] p-4 rounded-sm w-fit w-[100dvh]">
          <div className="table-auto table w-full">
            <div className="table-header-group">
              <div className="table-row">
                <div className="table-cell px-4 font-bold py-5">
                  Nome da sala
                </div>
                <div className="table-cell px-4 font-bold py-5">
                  Centro cirúrgico
                </div>
              </div>
            </div>
            <div className="table-row-group">
              <div className="bg-[#D9D9D9] table-row p-2 rounded-sm">
                <div className="table-cell px-4 py-5 rounded-s-sm"></div>
                <div className="table-cell px-4 py-5 rounded-e-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
