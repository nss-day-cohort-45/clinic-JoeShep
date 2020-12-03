// Imports go first
import { testPerson } from "./TestFacility.js"
import { usePatients, diagnose } from "./Clinic.js"
import { PatientList } from "./PatientList.js"

// Test 5 people at the testing facility
let doug = testPerson("Doug", 34, 100)
let mary = testPerson("Mary", 30, 102)
let perry = testPerson("Perry", 56, 98.6)
let martha = testPerson("Martha", 84, 105)
let benny = testPerson("Benny", 14, 101.5)

// Diagnose each person at the clinic
diagnose(doug, 3)
diagnose(mary, 5)
diagnose(perry, 2)
diagnose(martha, 2)
diagnose(benny, 7)

// Invoke the component function that returns the HTML string of patients and add it to the DOM
const patientHTML = PatientList()
document.querySelector(".patients").innerHTML = patientHTML
