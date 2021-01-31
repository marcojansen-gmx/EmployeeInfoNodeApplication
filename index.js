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
            const Manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            teamArray.push(Manager);
            createEmployee()
        })
    }
};


createEmployee()

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
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                buildEmployee();
        }
    });
}

function addEngineer(){
    console.log("addEngineer");
     inquirer.prompt([
     {
      type: "input",
      name: "name",
      message: "Please enter your engineers name?",
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
    }
    ]).then(answers => {
        console.log(answers)
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github  )
        teamArray.push(engineer);
        createEmployee()
    })
}

function buildEmployee() {
    console.log("buildEmployee");
}

// fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => {
//     err ? console.log(err) : console.log('Success!')
// })

// fs.writeFile(outputPath, fileData, "utf-8");


// ask question specific to emmployee type
// const htmlPath = path.join(__dirname, "src", "html-templates", "main.html");
// const layout = fs.readFileSync(htmlPath, "utf-8");
// htmlHelpers.injectCode(layout, '{{ code_injection }}', JSON.stringify(employees));
