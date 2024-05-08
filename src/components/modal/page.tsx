import { useState } from "react"

const Modal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [patient, setPatient] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [duration, setDuration] = useState("")
  const [warningType, setWarningType] = useState("")
  const [surgeon, setSurgeon] = useState("")
  const [specialty, setSpecialty] = useState("")
  const [surgeryProposal, setSurgeryProposal] = useState("")
  const [laterality, setLaterality] = useState("")
  const [equipments, setEquipments] = useState(Array(8).fill(false))
  const [materials, setMaterials] = useState("")
  const [opmeMaterials, setOpmeMaterials] = useState("")
  const [quantity, setQuantity] = useState("")
  const [specialMaterials, setSpecialMaterials] = useState("")
  const [requester, setRequester] = useState("")

  const openModal = () => {
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  const handleCheckboxChange = (index: number) => {
    const updatedEquipments = [...equipments]
    updatedEquipments[index] = !updatedEquipments[index]
    setEquipments(updatedEquipments)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log({
      patient,
      date,
      time,
      duration,
      warningType,
      surgeon,
      specialty,
      surgeryProposal,
      laterality,
      equipments,
      materials,
      opmeMaterials,
      quantity,
      specialMaterials,
      requester,
    })

    setPatient("")
    setDate("")
    setTime("")
    setDuration("")
    setWarningType("")
    setSurgeon("")
    setSpecialty("")
    setSurgeryProposal("")
    setLaterality("")
    setEquipments(Array(8).fill(false))
    setMaterials("")
    setOpmeMaterials("")
    setQuantity("")
    setSpecialMaterials("")
    setRequester("")
    closeModal()
  }

  return (
    <div className="">
      <button onClick={openModal}>Criar aviso de cirurgia</button>
      {isModalVisible ? (
        <div className="absolute min-h-dvh min-w-full top-0 left-0 flex items-center justify-center">
          <div className="bg-white rounded w-[920px] h-[900px]">
            <h1 className="text-center text-2xl font-bold mb-4 mt-4 text-blue-500">
              Aviso de Cirurgia
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap justify-between"
            >
              <div className="flex flex-col md:w-1/2">
                <label htmlFor="patient">Paciente:</label>
                <input
                  type="text"
                  id="patient"
                  value={patient}
                  onChange={(e) => setPatient(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1  w-[223px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/4">
                <label htmlFor="date">Data e Hora:</label>
                <input
                  type="text"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[191px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/4">
                <label htmlFor="duration">Duração:</label>
                <input
                  type="text"
                  id="duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[191px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <fieldset>
                  <legend>Tipo de Aviso:</legend>
                  <label>
                    <input
                      type="radio"
                      value="urgente"
                      checked={warningType === "urgente"}
                      onChange={(e) => setWarningType(e.target.value)}
                    />
                    Urgente
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="não urgente"
                      checked={warningType === "não urgente"}
                      onChange={(e) => setWarningType(e.target.value)}
                    />
                    Não Urgente
                  </label>
                </fieldset>
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <label htmlFor="surgeon">Cirurgião Responsável:</label>
                <input
                  type="text"
                  id="surgeon"
                  value={surgeon}
                  onChange={(e) => setSurgeon(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[223px]"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <label htmlFor="specialty">Especialidade:</label>
                <input
                  type="text"
                  id="specialty"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="border-black border-solid border-2 rounded px-1 py-1 w-[174px]"
                />
              </div>
              <div className="flex w-full gap-8">
                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="surgeryProposal">Cirurgia Proposta:</label>
                  <input
                    type="text"
                    id="surgeryProposal"
                    value={surgeryProposal}
                    onChange={(e) => setSurgeryProposal(e.target.value)}
                    className="border-black border-solid border-2 rounded px-1 py-1 w-[582px]"
                  />
                  <input
                    type="text"
                    id="surgeryProposal"
                    value={surgeryProposal}
                    onChange={(e) => setSurgeryProposal(e.target.value)}
                    className="border-black border-solid border-2 rounded px-1 py-1 w-[582px]"
                  />
                  <input
                    type="text"
                    id="surgeryProposal"
                    value={surgeryProposal}
                    onChange={(e) => setSurgeryProposal(e.target.value)}
                    className="border-black border-solid border-2 rounded px-1 py-1 w-[582px]"
                  />
                  <input
                    type="text"
                    id="surgeryProposal"
                    value={surgeryProposal}
                    onChange={(e) => setSurgeryProposal(e.target.value)}
                    className="border-black border-solid border-2 rounded px-1 py-1 w-[582px]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="laterality">Lateralidade:</label>
                  <input
                    type="text"
                    id="laterality"
                    value={laterality}
                    onChange={(e) => setLaterality(e.target.value)}
                    className="border-black border-solid border-2 rounded px-1 py-1 w-[209px]"
                  />
                  <input
                    type="text"
                    id="laterality"
                    value={laterality}
                    onChange={(e) => setLaterality(e.target.value)}
                    className="border-black border-solid border-2 rounded px-1 py-1 w-[209px]"
                  />
                  <input
                    type="text"
                    id="laterality"
                    value={laterality}
                    onChange={(e) => setLaterality(e.target.value)}
                    className="border-black border-solid border-2 rounded px-1 py-1 w-[209px]"
                  />
                  <input
                    type="text"
                    id="laterality"
                    value={laterality}
                    onChange={(e) => setLaterality(e.target.value)}
                    className="border-black border-solid border-2 rounded px-1 py-1 w-[209px]"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full pt-5">
                <label>Equipamentos:</label>
                <div>
                  {equipments.map((checked, index) => (
                    <label key={index}>
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => handleCheckboxChange(index)}
                      />
                      Equipamento {index + 1}
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex flex-col w-full pt-4">
                <label htmlFor="materials">Materiais / Instrumentais:</label>
                <span className="text-blue-500">
                  Materiais OPME compatíveis com procedimento(s) validados na
                  SIGTAP:
                </span>
                <div className="flex">
                  <input
                    type="text"
                    id="opmeMaterials"
                    value={opmeMaterials}
                    onChange={(e) => setOpmeMaterials(e.target.value)}
                    className="border-black border-solid border-2 rounded px-1 py-1 w-[645px]"
                  />
                  <input
                    type="text"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Qt."
                    className="border-black border-solid border-2 rounded px-1 py-1 ml-2 w-[76px]"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full pt-4">
                <label htmlFor="specialMaterials">Materiais Especiais:</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="specialMaterials"
                    value={specialMaterials}
                    onChange={(e) => setSpecialMaterials(e.target.value)}
                    className="border-black border-solid border-2 rounded px-1 py-1 w-[821px] h-[88px]"
                  />
                </div>

                <div className="flex items-center mx-auto pt-5">
                  <div className="ml-2 pt-8 p-2 font-bold	">Dr.(a)</div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-bold">
                      Responsável pela solicitação
                    </label>
                    <input
                      type="text"
                      id="requester"
                      value={requester}
                      onChange={(e) => setRequester(e.target.value)}
                      className="border-black border-solid border-2 rounded px-1 py-1 w-[341px]"
                    />
                  </div>
                </div>
              </div>

              <button type="button" onClick={closeModal}>
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
