let idCounter = 1

export const testPerson = (name, age, temp) => {
  const person = {
    id: idCounter++,
    firstName: name,
    age: age,
    temperature: temp
  }

  return person
}
