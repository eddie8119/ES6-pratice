function Person(firstName, lastName) {
  console.log(this); // Person{}
  this.firstName = firstName;
  this.lastName = lastName;
  console.log(this); // Person {firstName: undefined, lastName: undefined}
}

let john = new Person();
