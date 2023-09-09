const { exec } = require("child_process");

const mainapp = "main";
const app1Path = "home";
const app2Path = "product";
const app3Path = "advert";

const startApp1Command = `cd ${mainapp} && npm install`;
const startApp2Command = `cd ${app1Path} && npm install`;
const startApp3Command = `cd ${app2Path} && npm install`;
const startApp4Command = `cd ${app3Path} && npm install`;

function startApplication(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error installing dependency: ${error}`);
    } else {
      console.log(`Dependency installed: ${command}`);
    }
  });
}

startApplication(startApp1Command);
startApplication(startApp2Command);
startApplication(startApp3Command);
startApplication(startApp4Command);
