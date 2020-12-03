import { usePatients } from "./Clinic.js"

export const PatientList = () => {
  const patientStrings = []
  const patientArr = usePatients()

  for( const patient of patientArr) {
    const patientString = `<section class="patient" id="patient--${patient.id}">
    <h2 class="patient__name">${patient.firstName}</h2>
    <div class="patient__properties">
    <p>Age: ${patient.age}</p>
    <p>Temperature: ${patient.temperature}</p>
    <p>Diagnosed: ${patient.diagnosed}</p>
    </div>
    <div class="patient_diagnosis">Infected: ${patient.infected}</div>
    </section>`

    patientStrings.push(patientString)
  }

  return patientStrings.join("")
}
