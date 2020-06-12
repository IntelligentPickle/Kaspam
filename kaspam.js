var Kahoot = require("kahoot.js-updated");
var client = new Kahoot;
const { exec } = require("child_process");

console.log("Joining kahoot...");


client.join(167964 /* Or any other kahoot game pin */, `bot${Math.random() * (99999 - 1) + 1}`);

client.on("joined", () => {
    console.log("Bot joined.");
});


exec("node .", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

