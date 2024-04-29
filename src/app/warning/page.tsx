import React from "react"

export default function Page() {
  return (
    <main className="h-full w-full flex items-center justify-center">
      <div className="w-fit">
        <div className="flex justify-between items-center py-2">
          <div>Listagem de avisos</div>
          <div>Criar aviso de cirurgia</div>
        </div>
        <div className="bg-[#fff] p-4 rounded-sm w-fit">
          <div className="table-auto table w-full">
            <div className="table-header-group">
              <div className="table-row">
                <div className="table-cell px-4 font-bold py-5">Cirurgia</div>
                <div className="table-cell px-4 font-bold py-5">
                  Médico responsável
                </div>
                <div className="table-cell px-4 font-bold py-5">Sala</div>
                <div className="table-cell px-4 font-bold py-5">Paciente</div>
                <div className="table-cell px-4 font-bold py-5">Data</div>
              </div>
            </div>
            <div className="table-row-group">
              <div className="bg-[#D9D9D9] table-row p-2 rounded-sm">
                <div className="table-cell px-4 py-5 rounded-s-sm"></div>
                <div className="table-cell px-4 py-5"></div>
                <div className="table-cell px-4 py-5"></div>
                <div className="table-cell px-4 py-5"></div>
                <div className="table-cell px-4 py-5 rounded-e-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
