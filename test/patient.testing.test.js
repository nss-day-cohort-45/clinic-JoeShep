import { testPerson } from "../src/scripts/TestFacility.js";

let person;

describe("Person is tested and has an identifier", () => {
  beforeAll(() => {
    person = testPerson("Doug", 65, 102);
  });

  test("Person has correct properties", () => {
    expect(person).toMatchObject({
      firstName: "Doug",
      age: 65,
      temperature: 102,
      id: 1,
    });
  });
});
