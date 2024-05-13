import { useState } from "react"

const Modal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [provider, setProvider] = useState("")
  const [date, setDate] = useState("")
  const [cpf, setCpf] = useState("")
  const [cep, setCep] = useState("")
  const [acting, setActing] = useState("")
  const [rg, setRg] = useState("")
  const [cns, setCns] = useState("")
  const [crm, setCrm] = useState("")
  const [cbo, setCbo] = useState("")
  const [mothername, setMotherName] = useState("")
  const [maritalstatus, setMaritalStatus] = useState("")
  const [specialty, setSpecialty] = useState("")
  const [activity, setActivity] = useState("")
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
      provider,
      phone,
      date,
      cpf,
      cns,
      cep,
      acting,
      rg,
      crm,
      cbo,
      mothername,
      maritalstatus,
      specialty,
      activity,
    })

    setProvider("")
    setDate("")
    setRg("")
    setCpf("")
    setCep("")
    setCns("")
    setCrm("")
    setCbo("")
    setMotherName("")
    setMaritalStatus("")
    setSpecialty("")
    setActivity("")
    setPhone("")
    closeModal()
  }

  return (
    <div className="">
      <button onClick={openModal}>Adicionar prestador</button>
      {isModalVisible ? (
        <div className="absolute min-h-dvh min-w-full top-0 left-0 flex items-center justify-center">
          <div className="bg-white rounded w-[766px] h-[380px]">
            <h1 className="text-center text-2xl font-bold mb-4 mt-4 text-blue-500">
              Prestador
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap justify-between"
            >
              <div className="flex flex-col md:w-1/2">
                <label htmlFor="provider">Nome:</label>
                <input
                  type="text"
                  id="provider"
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1  w-[350px]"
                />
              </div>
              <div className="flex flex-col md:w-1/2">
                <label htmlFor="mothername">Nome da Mãe:</label>
                <input
                  type="text"
                  id="provider"
                  value={mothername}
                  onChange={(e) => setMotherName(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1  w-[350px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/5">
                <label htmlFor="date">Dt. Nascimento</label>
                <input
                  type="text"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[171px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/5">
                <label htmlFor="cpf">CPF:</label>
                <input
                  type="text"
                  id="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[171px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/5">
                <label htmlFor="rg">RG:</label>
                <input
                  type="text"
                  id="rg"
                  value={rg}
                  onChange={(e) => setRg(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[171px]"
                />
              </div>
              <div className="flex flex-col md:w-1/4">
                <label htmlFor="cns">CNS:</label>
                <input
                  type="text"
                  id="cns"
                  value={cns}
                  onChange={(e) => setCns(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1  w-[171px]"
                />
              </div>
              <div className="flex flex-col md:w-1/3">
                <label htmlFor="phone">Telefone:</label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1  w-[223px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <label htmlFor="cep">CEP:</label>
                <input
                  type="text"
                  id="cep"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[195px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <label htmlFor="maritalstatus">Estado Civil:</label>
                <input
                  type="text"
                  id="maritalstatus"
                  value={maritalstatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[269px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <label htmlFor="crm">CRM:</label>
                <input
                  type="text"
                  id="crm"
                  value={crm}
                  onChange={(e) => setCrm(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[223px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <label htmlFor="crm">CBO:</label>
                <input
                  type="text"
                  id="cbo"
                  value={cbo}
                  onChange={(e) => setCbo(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[195px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <label htmlFor="specialty">Especialidade:</label>
                <input
                  type="text"
                  id="specialty"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[269px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/1">
                <label htmlFor="specialty">Prestador ativo?:</label>
                <input
                  type="radio"
                  id="activity"
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[191px]"
                />
                <span>Sim</span>
                <input
                  type="radio"
                  id="activity"
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[191px]"
                />
                <span>Não</span>
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
