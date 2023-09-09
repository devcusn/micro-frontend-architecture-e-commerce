const { exec } = require("child_process");

const mainapp = "main";
const app1Path = "home";
const app2Path = "product";
const app3Path = "advert";

const startApp1Command = `cd ${mainapp} && npm start`;
const startApp2Command = `cd ${app1Path} && npm start`;
const startApp3Command = `cd ${app2Path} && npm start`;
const startApp4Command = `cd ${app3Path} && npm install`;

function startApplication(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting application: ${error}`);
    } else {
      console.log(`Application started: ${command}`);
    }
  });
}

startApplication(startApp1Command);
startApplication(startApp2Command);
startApplication(startApp3Command);
startApplication(startApp4Command);
