const fs = require('fs');
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const path = require('path');
const htmlHelpers = require('./src/utils/html');
const inquirer = require('inquirer');
const teamArray = [];

// initial manager input
createManager()

function createManager () {
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
        console.log(data);
        switch (data.employeeType) {
            case 'Add Engineer':
                addEngineer();
                break;
            case 'Add Intern':
                addIntern();
                break;
            default:
                buildEmployee();
        }
    });
}

function addEngineer(){
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

function addIntern(){
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

function buildEmployee() {
    console.log(teamArray);
}

// fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => {
//     err ? console.log(err) : console.log('Success!')
// })

// fs.writeFile(outputPath, fileData, "utf-8");


// ask question specific to emmployee type
// const htmlPath = path.join(__dirname, "src", "html-templates", "main.html");
// const layout = fs.readFileSync(htmlPath, "utf-8");
// htmlHelpers.injectCode(layout, '{{ code_injection }}', JSON.stringify(employees));
