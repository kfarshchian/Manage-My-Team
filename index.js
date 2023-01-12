const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./src/generateMarkdown");
const Manager = require('./lib/manager')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')
const allEmployees = [];

const getManager = () =>{ 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is the managers employee ID?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is the managers email?',
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: 'What is the managers officeNumber?',
        },
    ])
    .then(managerInput => {
      const  { name, id, email, officeNumber } = managerInput; 
      const manager = new Manager (name, id, email, officeNumber);

      allEmployees.push(manager); 
  })
};
const getTeam = () =>{
  return inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message: 'Please pick the employee role.',
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
       name: 'name',
        message: 'What is the name of the employee?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee email?',
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter the employee's github username.",
        when: (input) => input.role === "Engineer",
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the intern's school",
        when: (input) => input.role === "Intern",
    },
    {
      type: 'confirm',
      name: 'confirmGetTeam',
      message: 'Would you like to add more team members?',
      default: false
    }
    ]) 
    .then(employeeData => {
      let { name, id, email, role, github, school, confirmGetTeam } = employeeData; 
      let employee; 
      if (role === "Engineer") {
          employee = new Engineer (name, id, email, github);
          // console.log(allEmployees);
      } else if (role === "Intern") {
          employee = new Intern (name, id, email, school);
          // console.log(allEmployees);
      }
      allEmployees.push(employee); 
      if (confirmGetTeam) {
          return getTeam(allEmployees); 
      } else {
          return allEmployees;
      }
  })
  
}

function init() {
    getManager()
    .then(getTeam)
    .then((data) => {
        // console.log(data);
        return fs.writeFileSync("./dist/index.html", generateHTML(data));
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
}

init();
