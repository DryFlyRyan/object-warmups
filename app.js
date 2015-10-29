function Person(firstName, lastName) {
  this.firstName = firstName || "John";
  this.lastName = lastName || "Doe";
  this.setFirstName = function (firstName) {
    if (typeof firstName === 'string' && firstName.length < 50) {
      this.firstName = firstName;
    } else {
      console.log("Invalid name!");
    }
  };
  this.setLastName = function(lastName) {
    if (typeof lastName === 'string' && lastName.length < 50) {
      this.firstName = firstName;
    } else {
      console.log("Invalid name!");
    }
  }
  this.getFirstName = function() {
    return this.firstName;
  }
  this.getLastName = function() {
    return this.lastName;
  }
  this.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
    console.log(this.firstName + this.lastName);
  }
}
