import React from "react"

export default function Page() {
  return (
    <main className="h-full w-full flex items-center justify-center relative">
      <div className="w-fit">
        <div className="flex justify-center py-2">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Administrativos</h3>
            <div
              className="bg-gray-200 rounded-md p-4 mb-4 mx-8"
              style={{
                height: "35vh",
                width: "55vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/8de1/b24c/faf853c13514b7eceacc4664ac6e053f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DSNVeDjWzhlOqwly40GdcE7l0rJxMErIa7hKuIttfNt3888JSTzO-Q3w6S00QFGSnq7cOjyoD7AjkiO3HPyTRcrXU~xkCRbwln6DAzFt-lOa6oUWc6yhDFKWHrWw9KwGYDyR9wtUr9YSo8vnrfu13IseTkkYy-gFuB7LMH~k19SAR7b7Xyrn22HS6-HF55X~wvC3q5VsXuN5pcMSr6sG8tTCjode5yPhyNycFYjNsr6zI5QhYxxEaIfiUp2BjxzFQ2Jqw-NTFjI1BpsHuu0TpVFO0sWXsOePsM2iknzk8kDGRhmio~6UnreRs9VsSi5PYh72--agNxm-jWlurlKunw__"
                alt="Admin Image"
                className="mb-2"
                style={{ width: "30%", height: "45%" }}
              />
              <p className="mb-2">
                doloremque cupiditate in nulla quos placeat eaque aperiam
                voluptatem dolorem non perspiciatis dicta quis consectetur.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-[30dvh] h-[5dvh]">
                Button
              </button>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2"> Operacionais</h3>
            <div
              className="bg-gray-200 rounded-md p-4 mb-4 mx-8"
              style={{
                height: "35vh",
                width: "55vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/b17e/2cc1/669df04d8e9e488e8387f8d187be52a4?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mllLIScPJD8hORNhClKomSus6w-Zlhv8h3NpHw3Gd2sjFPkwDmlCSxVbZsnkI0SeQ6B8QEAolExc2hCjcvWx66sOmC4HogO3TP41SO5ZWNxeYNTUtypywbJeodwK4NSgh8iWq8fpOsw54RLyjcaC5OWUPFKt3EuuSLnvQYL27Yt1CUcS1G1-mTsEl-Ylkpa2qI8DJIE8l~ccBKnS3lCYfaHbSew~bPHvf83Hcp9LcTr-~SmT-U6WiBRFZnVM0NA~IlMMNCs6TUmxRt1Ht8OY3m451OZW0HHjgzBq8HICyHyWCucBMLKgFI522YGnhnsnr4E6uY1JUhJUmB-QlPCNjQ__"
                alt="Operation Image"
                className="mb-2"
                style={{ width: "30%", height: "45%" }}
              />
              <p className="mb-2">
                doloremque cupiditate in nulla quos placeat eaque aperiam
                voluptatem dolorem non perspiciatis dicta quis consectetur.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-[30dvh] h-[5dvh]">
                Button
              </button>
            </div>
          </div>
        </div>
        <hr className="bg-gray-500 h-1 mb-4 bg-gradient-to-b flex flex-col items-center" />
        <div className="flex justify-between items-center">
          <div>Histórico de relatórios</div>
        </div>
        <div className="bg-[#fff] p-4 rounded-sm w-fit">
          <div className="table-auto table w-[150vh]">
            <div className="table-header-group">
              <div className="table-row">
                <div className="table-cell px-4 font-bold py-5">Nome</div>
                <div className="table-cell px-4 font-bold py-5">Tipo</div>
                <div className="table-cell px-4 font-bold py-5">Data</div>
              </div>
            </div>
            <div className="table-row-group">
              <div className="bg-[#D9D9D9] table-row p-2 rounded-sm">
                <div className="table-cell px-4 py-5 rounded-s-sm"></div>
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
