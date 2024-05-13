import { useState } from "react"

const Modal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [patient, setPatient] = useState("")
  const [date, setDate] = useState("")
  const [cpf, setCpf] = useState("")
  const [rg, setRg] = useState("")
  const [cns, setCns] = useState("")
  const [cep, setCep] = useState("")
  const [motherName, setMotherName] = useState("")
  const [maritalStatus, setMaritalStatus] = useState("")
  const [phone, setPhone] = useState("")

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
      rg,
      cns,
      cep,
      motherName,
      maritalStatus,
      phone,
    })

    setPatient("")
    setDate("")
    setCpf("")
    setCns("")
    setCep("")
    setMotherName("")
    setMaritalStatus("")
    setPhone("")
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
              <div className="flex flex-col md:w-1/2">
                <label htmlFor="patient">Nome:</label>
                <input
                  type="text"
                  id="patient"
                  value={patient}
                  onChange={(e) => setPatient(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1  w-[350px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2">
                <label htmlFor="date">Nome da Mãe:</label>
                <input
                  type="text"
                  id="date"
                  value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[350px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/4">
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
              <div className="flex flex-col w-full md:w-1/4">
                <label htmlFor="cpf">RG:</label>
                <input
                  type="text"
                  id="duration"
                  value={rg}
                  onChange={(e) => setRg(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[191px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/4">
                <label htmlFor="cpf">CNS:</label>
                <input
                  type="text"
                  id="duration"
                  value={cns}
                  onChange={(e) => setCns(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[191px]"
                />
                <div className="flex flex-col w-full md:w-1/2">
                  <label htmlFor="duration">Telefone:</label>
                  <input
                    type="text"
                    id="duration"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border-black border-solid border-2 rounded px-1 py-1 w-[191px]"
                  />
                </div>
              </div>
              <div className="flex flex-col md:w-1/2">
                <label htmlFor="patient">CEP:</label>
                <input
                  type="text"
                  id="patient"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1  w-[223px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2">
                <label htmlFor="duration">Estado civil:</label>
                <input
                  type="text"
                  id="duration"
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[191px]"
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
