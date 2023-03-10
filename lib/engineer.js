const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
    }
    getGithub(){
      this.github = this.github;
    }
    getRole(){
      return 'Engineer';
    }
}
module.exports = Engineer;