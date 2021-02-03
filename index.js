const fs = require('fs');
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const path = require('path');
const htmlHelpers = require('./src/utils/html');
const inquirer = require('inquirer');
const teamArray = [];
const employee = [];
let cards;

// initial manager input
createManager()

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your name?",
        },
        {
            type: 'input',
            message: 'What is your ID number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please enter your office phone number?',
            name: 'officeNumber'
        }
    ]).then(answers => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        teamArray.push(manager);
        createEmployee()
    })
}

// adding staff member selection
function createEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Who do you want to add to your team?',
            name: 'employeeType',
            choices: ['Add Engineer', 'Add Intern', 'Quit to result'],
        },
    ]).then((data) => {
        // console.log(data);
        switch (data.employeeType) {
            case 'Add Engineer':
                addEngineer();
                break;
            case 'Add Intern':
                addIntern();
                break;
            default:
                buildSouce(teamArray);
        }
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your engineer's name?",
        },
        {
            type: 'input',
            message: 'What is his/her ID number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is his/her email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is his/her Github address?',
            name: 'github',
        }
    ]).then(answers => {
        console.log(answers)
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        teamArray.push(engineer);
        createEmployee()
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your Intern's name?",
        },
        {
            type: 'input',
            message: 'What is his/her ID number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is his/her email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is his/her School?',
            name: 'school',
        }
    ]).then(answers => {
        console.log(answers)
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        teamArray.push(intern);
        createEmployee()
    })
}

function buildEmployee(employee) {  
let source;
if (employee instanceof Manager)  {
    source = `
    <div class="card">
    <div class="card-header">ID: ${ employee.getId() }</div>
    <div class="card-body">
      <h5 class="card-title">Name: ${ employee.getName() }</h5>
      <p class="card-text">Role: ${ employee.getRole() }</p>
      <a href="#" class="btn btn-primary">Phone: ${ employee.getOfficeNumber() }</a>
    </div>
  </div>`;
} else if (employee instanceof Engineer) {
    source = `
    <div class="card">
    <div class="card-header">ID: ${ employee.getId() }</div>
    <div class="card-body">
      <h5 class="card-title">Name: ${ employee.getName() }</h5>
      <p class="card-text">Role: ${ employee.getRole() }</p>
      <a href="#" class="btn btn-primary">Github: ${ employee.getGithub() }</a>
    </div>
  </div>`

} else if (employee instanceof Intern) {
    source =`
    <div class="card">
    <div class="card-header">ID: ${ employee.getId() }</div>
    <div class="card-body">
      <h5 class="card-title">Name: ${ employee.getName() }</h5>
      <p class="card-text">Role: ${ employee.getRole() }</p>
      <a href="#" class="btn btn-primary">School: ${ employee.getSchool() }</a>
    </div>
  </div>`
}

    return source;
}


function buildSouce(teamArray) {
    let asd = "";
    for (let index = 0; index < teamArray.length; index++) {
        const employee = teamArray[index];
        asd += buildEmployee(employee)
    }
    const sourcePath = path.join(
        __dirname,
        "src",
        "html-templates",
        "layout.html"
    );

    let source = fs.readFileSync(sourcePath, "utf-8");

    const finalStr = htmlHelpers.injectCode(source, "{{ body }}", asd);
    const finalPath = path.join(
        __dirname,
        "src",
        "html-templates",
        "final.html"
    );
    fs.writeFileSync(finalPath, finalStr);
}
