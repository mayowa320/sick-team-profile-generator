var inquirer = require("inquirer");
let Employee = require("./lib/Employee");
let Manager = require("./lib/Manager");
let Intern = require("./lib/Intern");
let Engineer = require("./lib/Engineer");
let data = [];
// inquirer.prompt(prompts);

// At some point in the future, push new questions
let defaultQuestions = [
  /* Pass your questions in here */
  {
    message: "What is your team manager's name?",
    type: "input",
    name: "name",
  },
  {
    message: "What is your team manager's employer ID?",
    type: "input",
    name: "id",
  },
  {
    message: "What is your team manager's email?",
    type: "input",
    name: "email",
  },
  {
    message: "What is your team manager's office number?",
    type: "input",
    name: "officeNumber",
  },
];
let choiceQuestion = {
  message: "What are your test instructions?",
  type: "list",
  name: "instructions",
  choices: ["add engineer", "add intern", "finish building"],
};
const addCard = (data, isEngineer) => {};
const main = () => {
  inquirer.prompt(defaultQuestions).then((answers) => {
    let { name, id, email, officeNumber } = answers;
    let manager = new Manager(id, name, email, officeNumber);
    let continueLoop = true;
    while (continueLoop) {
      inquirer.prompt([choiceQuestion]).then((instruction) => {
        let { instructions } = instruction;
        if (instructions == "add engineer") {
          addEngineer();
        } else if (instructions === "add intern") {
          addIntern();
        } else {
          console.log(data);
          continueLoop = false;
        }
      });
    }
  });
};

<div class="card" style="width: 18rem">
  <div class="card-body bg-primary text-white">
    <h5 class="card-title">Card title</h5>
    <h5 class="card-title">Card title</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>;
