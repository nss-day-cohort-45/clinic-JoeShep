const people = []

export const usePatients = () => {
  return people.slice()
}

export const diagnose = (personObj, dayCount) => {
    personObj.diagnosed = true

    if (personObj.temperature > 101 && dayCount >= 4 ) {
      personObj.infected = true
    } else {
      personObj.infected = false
    }

    people.push(personObj)
    return personObj
}
