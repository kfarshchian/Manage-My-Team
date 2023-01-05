const Shape = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }
    getSchool(){
      this.school = this.school;
    }
    getRole(){
      return 'Intern';
    }
}
module.exports = Intern;