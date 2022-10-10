var inquirer = require("inquirer");
var Rx = require("rxjs");
var fs = require("fs");
console.log("running");

var prompts = new Rx.Subject();
// inquirer.prompt(prompts);

// At some point in the future, push new questions
let defaultQuestions = [
  /* Pass your questions in here */
  {
    message: "What is your team manager's name?",
    type: "input",
    name: "manager_name",
  },
  {
    message: "What is your team manager's employer ID?",
    type: "input",
    name: "manager_ID",
  },
  {
    message: "What is your team manager's email?",
    type: "input",
    name: "manager_email",
  },
  {
    message: "What is your team manager's office number?",
    type: "input",
    name: "manager_office_number",
  },

  {
    message: "What are your test instructions?",
    type: "list",
    name: "instructions",
    choices: ["add engineer", "add intern", "finish building"],
  },
];
inquirer.prompt(defaultQuestions).then((answers) => {
  console.log(answers);
});
