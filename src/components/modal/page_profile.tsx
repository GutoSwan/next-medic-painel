import { useState } from "react"

const Modal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [patient, setPatient] = useState("")
  const [password, setPassword] = useState("")
  const [repeat, setRepeat] = useState("")
  const [perfil, setPerfil] = useState("")
  const [mail, setMail] = useState("")
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
      patient,
      password,
      repeat,
      perfil,
      mail,
      provider,
      activity,
    })

    setPatient("")
    setPassword("")
    setRepeat("")
    setPerfil("")
    setMail("")
    setProvider("")
    setActivity("")

    closeModal()
  }

  return (
    <div className="">
      <button onClick={openModal}>Perfil</button>
      {isModalVisible ? (
        <div className="absolute min-h-dvh min-w-full top-0 left-0 flex items-center justify-center">
          <div className="bg-white rounded w-[587px] h-[636px]">
            <h1 className="text-center text-2xl font-bold mb-4 mt-4 text-blue-500">
              Cadastro de Perfil
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap justify-between"
            >
              <div className="flex flex-col md:w-1/1">
                <label htmlFor="provider">Prestador:</label>
                <input
                  type="text"
                  id="provider"
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1  w-[450px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/1">
                <label htmlFor="mail">Email</label>
                <input
                  type="text"
                  id="mail"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[500px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/1">
                <label htmlFor="password">Crie uma senha</label>
                <input
                  type="text"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[500px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/1">
                <span>Deve ter, no mínimo, 12 caracteres</span>
                <span>
                  Deve incluir letras maiúsculas e minúsculas (a-z e A-Z)
                </span>
                <span>Deve incluir um número (0-9)</span>
                <span>
                  Deve incluir um caractere especial (!, @, #, %, etc.)
                </span>
              </div>

              <div className="flex flex-col w-full md:w-1/1">
                <label htmlFor="repeat">Repita a senha</label>
                <input
                  type="text"
                  id="duration"
                  value={repeat}
                  onChange={(e) => setRepeat(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[500px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/1">
                <label htmlFor="perfil">Nome do Perfil</label>
                <input
                  type="text"
                  id="duration"
                  value={perfil}
                  onChange={(e) => setPerfil(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[500px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/1">
                <label htmlFor="">Tipo de prestador</label>
                <div>
                  <input
                    type="radio"
                    id="activity"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    className="border-black border-solid border-2 rounded px-1 py-1 w-[191px]"
                  />
                  <label htmlFor="">Médico</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="activity"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    className="border-black border-solid border-2 rounded px-1 py-1 w-[191px]"
                  />
                  <label htmlFor="">Operacional</label>
                </div>
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
