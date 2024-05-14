import { useState } from "react"

const Modal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [namerom, setNameRom] = useState("")
  const [surgerycenter, setSurgeryCenter] = useState("")
  const [newcenter, setNewCenter] = useState("")
  const [perfil, setPerfil] = useState("")
  const [numberrom, setNumberRom] = useState("")
  const [provider, setProvider] = useState("")
  const [activity, setActivity] = useState("")

  const openModal = () => {
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log({
      namerom,
      surgerycenter,
      newcenter,
      perfil,
      numberrom,
      provider,
      activity,
    })

    setNameRom("")
    setSurgeryCenter("")
    setNewCenter("")
    setPerfil("")
    setNumberRom("")
    setProvider("")
    setActivity("")

    closeModal()
  }

  return (
    <div className="">
      <button onClick={openModal}>
        Adicionar nova sala ou centro cirúrgico
      </button>
      {isModalVisible ? (
        <div className="absolute min-h-dvh min-w-full top-0 left-0 flex items-center justify-center">
          <div className="bg-white rounded w-[550px] h-[336px]">
            <h1 className="text-center text-2xl font-bold mb-4 mt-4 text-blue-500">
              Sala de cirurgia
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap justify-between"
            >
              <div className="flex flex-col md:w-1/2">
                <label htmlFor="namerom">Nome da sala</label>
                <input
                  placeholder="Nome da sala..."
                  type="text"
                  id="namerom"
                  value={namerom}
                  onChange={(e) => setNameRom(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1  w-[390px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 ps-[125px]">
                <label htmlFor="numberrom">Número</label>
                <input
                  placeholder="Número..."
                  type="text"
                  id="numberrom"
                  value={numberrom}
                  onChange={(e) => setNumberRom(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[100px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/1">
                <label htmlFor="surgerycenter">Centro Cirúrgico</label>
                <input
                  placeholder="Selecione o centro cirúrgico ao qual a sala pertence..."
                  type="text"
                  id="surgerycenter"
                  value={surgerycenter}
                  onChange={(e) => setSurgeryCenter(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[500px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/1">
                <label htmlFor="newcenter">Criar novo centro</label>
                <input
                  placeholder="Insira o nome do novo centro cirúrgico..."
                  type="text"
                  id="duration"
                  value={newcenter}
                  onChange={(e) => setNewCenter(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[500px]"
                />
              </div>
              <button
                className="flex flex-col md:w-1/1 bg-gradient-to-b from-cyan-600 to-blue-800"
                type="button"
                onClick={closeModal}
              >
                <br />
                Adicionar
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Modal
