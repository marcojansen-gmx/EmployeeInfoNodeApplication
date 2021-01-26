const fs = require('fs');
const path = require('path');
const htmlHelpers = require('./src/utils/html');
const inquirer = require('inquirer');

    inquirer.prompt([
        {
            type: 'checkbox',
            message: 'Which employee type are you entering?',
            name: 'employeeType',
            choices: ['Employee', 'Engineer', 'Intern', 'Manager', 'Quit to result'],
        },
    ]);

    // keep asking the user to enter which employee type
    selectionPromise.then((data) => {
        switch (data) {
            case 'Employee':
                return new AddEmployee(data);
            case 'Engineer':
                return new AddEngineer(data);
            case 'Intern':
                return new AddIntern(data);
            case 'Manager':
                return new AddManager(data);
            default:
                return showFinalResult(data);
        }
    }

fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
    
});

// ask question specific to emmployee type
const htmlPath = path.join(__dirname, "src", "html-templates", "main.html");
const layout = fs.readFileSync(htmlPath, "utf-8");
htmlHelpers.injectCode(layout, '{{ code_injection }}', JSON.stringify(employees));
