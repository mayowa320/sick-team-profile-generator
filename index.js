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
defaultQuestions.forEach((question) => {
  prompts.next(question);
});

// prompts.next({
//   /* question... */
// });

// When you're done

inquirer
  .prompt(prompts)
  .ui.process.subscribe(onEachAnswer, onError, onComplete);
prompts.complete();
function onEachAnswer(...props) {
  console.log({ props }, "answer");
  prompts.next({
    message: "What are your test instructions?",
    type: "list",
    name: "instructions",
    choices: ["add engineer", "add intern", "finish building"],
  });
}
function onError(...props) {
  console.log(props);
}
function onComplete(...props) {
  console.log(props);
}

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//     {
//       message: "What is your team manager's name?",
//       type: "input",
//       name: "manager_name",
//     },
//     {
//       message: "What is your team manager's employer ID?",
//       type: "input",
//       name: "manager_ID",
//     },
//     {
//       message: "What is your team manager's email?",
//       type: "input",
//       name: "manager_email",
//     },
//     {
//       message: "What is your team manager's office number?",
//       type: "input",
//       name: "manager_office_number",
//     },

//     {
//       message: "What are your test instructions?",
//       type: "list",
//       name: "instructions",
//       choices: ["add engineer", "add intern", "finish building"],
//     },
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//     console.log(answers);
//     let template = JSON.stringify(answers);
//     fs.writeFile("index.html", template, "utf8", (err) => {
//       console.log(err);
//     });
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
