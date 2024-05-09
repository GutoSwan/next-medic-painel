import { useState } from "react"

const Modal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [patient, setPatient] = useState("")
  const [date, setDate] = useState("")
  const [cpf, setcpf] = useState("")
  const [cep, setcep] = useState("")
  const [motherName, setmotherName] = useState("")
  const [sus, setsus] = useState("")
  const [maritalStatus, setmaritalStatus] = useState("")
  const [phone, setphone] = useState("")

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
      date,
      cpf,
      cep,
      motherName,
      sus,
      maritalStatus,
      phone,
    })

    setPatient("")
    setDate("")
    setcpf("")
    setcep("")
    setmotherName("")
    setsus("")
    setmaritalStatus("")
    setphone("")
    closeModal()
  }

  return (
    <div className="">
      <button onClick={openModal}>Adicionar Paciente</button>
      {isModalVisible ? (
        <div className="absolute min-h-dvh min-w-full top-0 left-0 flex items-center justify-center">
          <div className="bg-white rounded w-[766px] h-[450px]">
            <h1 className="text-center text-2xl font-bold mb-4 mt-4 text-blue-500">
              Paciente
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap justify-between"
            >
              <div className="flex flex-col md:w-1/1">
                <label htmlFor="patient">Nome:</label>
                <input
                  type="text"
                  id="patient"
                  value={patient}
                  onChange={(e) => setPatient(e.target.value)}
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
                  onChange={(e) => setcpf(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[191px]"
                />
              </div>
              <div className="flex flex-col md:w-1/3">
                <label htmlFor="patient">CEP:</label>
                <input
                  type="text"
                  id="patient"
                  value={cep}
                  onChange={(e) => setcep(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1  w-[223px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <label htmlFor="date">Nome da Mãe:</label>
                <input
                  type="text"
                  id="date"
                  value={motherName}
                  onChange={(e) => setmotherName(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[191px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/4">
                <label htmlFor="duration">Cartão SUS:</label>
                <input
                  type="text"
                  id="duration"
                  value={sus}
                  onChange={(e) => setsus(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[191px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/5">
                <label htmlFor="duration">Estado civil:</label>
                <input
                  type="text"
                  id="duration"
                  value={maritalStatus}
                  onChange={(e) => setmaritalStatus(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[191px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/4">
                <label htmlFor="duration">Telefone:</label>
                <input
                  type="text"
                  id="duration"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
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
