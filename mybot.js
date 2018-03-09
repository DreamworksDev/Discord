const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if(message.content.startsWith(config.prefix + "prefix")) {
    // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    // change the configuration in memory
    config.prefix = newPrefix;

    // Now we have to save the file.
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  }

switch (command) {
case "ping" :
  message.channel.send('Pong!');
  break;
case "blah" :
  message.channel.send('Meh.');
  break;
}
});


client.login(config.token);
