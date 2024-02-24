/* ------ Person ------ */
class Person {
  name = "";
  address = "";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  getName() {
    return this.getName;
  }
  getAddress() {
    return this.getAddress;
  }
  setAddress(address) {
    this.address = address;
  }
  toString() {
    return `Person [name = ${this.name}, address = ${this.address}]`;
  }
}

/* ------ Student ------ */
class Student extends Person {
  program = "";
  year = 0;
  fee = 0;
  constructor(name, address, program, year, fee) {
    super(name, address);
    this.program = program;
    this.year = year;
    this.fee = fee;
  }
  getProgram() {
    return this.program;
  }
  setProgram(program) {
    this.program = program;
  }
  getYear() {
    return this.year;
  }
  setYear(year) {
    this.year = year;
  }
  getFee() {
    return this.fee;
  }
  setFee(fee) {
    this.fee = fee;
  }
  toString() {
    return `Student [Person = [name = ${this.name}, program = ${this.program}, year = ${this.year}, fee = ${this.fee}]]`;
  }
}

/* ------ Staff ------ */
class Staff extends Person {
  school = "";
  pay = 0;
  constructor(name, address, school, pay) {
    super(name, address);
    this.school = school;
    this.pay = pay;
  }
  getSchool() {
    return this.school;
  }
  setSchool(school) {
    this.school = school;
  }
  getPay() {
    return this.pay;
  }
  setPay(pay) {
    this.pay = pay;
  }
  toString() {
    return `Staff [Person = [name = ${this.name}, address = ${this.address}, school = ${this.school}, pay = ${this.pay}]]`;
  }
}

const main = () => {
  const person1 = new Person("kay", "ban kay");
  const student1 = new Student(
    "kay",
    "kay house",
    "software engineer",
    65,
    1160
  );

  const staff1 = new Staff("kay", "kay house", "software engineer", 65, 1160);

  console.log(student1.toString());
};

main();
