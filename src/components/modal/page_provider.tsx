import { useState } from "react"

const Modal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [provider, setProvider] = useState("")
  const [date, setDate] = useState("")
  const [cpf, setCpf] = useState("")
  const [cep, setCep] = useState("")
  const [acting, setActing] = useState("")

  const openModal = () => {
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log({
      provider,
      date,
      cpf,
      cep,
      acting,
    })

    setProvider("")
    setDate("")
    setCpf("")
    setCep("")
    setActing("")
    closeModal()
  }

  return (
    <div className="">
      <button onClick={openModal}>Adicionar prestador</button>
      {isModalVisible ? (
        <div className="absolute min-h-dvh min-w-full top-0 left-0 flex items-center justify-center">
          <div className="bg-white rounded w-[766px] h-[250px]">
            <h1 className="text-center text-2xl font-bold mb-4 mt-4 text-blue-500">
              Prestador
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap justify-between"
            >
              <div className="flex flex-col md:w-1/1">
                <label htmlFor="provider">Nome:</label>
                <input
                  type="text"
                  id="provider"
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1  w-[223px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <label htmlFor="date">Dt. Nascimento</label>
                <input
                  type="text"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[191px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/4">
                <label htmlFor="cpf">CPF:</label>
                <input
                  type="text"
                  id="duration"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[191px]"
                />
              </div>
              <div className="flex flex-col md:w-1/3">
                <label htmlFor="patient">CEP:</label>
                <input
                  type="text"
                  id="patient"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1  w-[223px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <label htmlFor="date">Nome da Mãe:</label>
                <input
                  type="text"
                  id="date"
                  value={acting}
                  onChange={(e) => setActing(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[191px]"
                />
              </div>

              <button
                className="flex flex-col md:w-1/5"
                type="button"
                onClick={closeModal}
              >
                <br />
                Fechar
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Modal
