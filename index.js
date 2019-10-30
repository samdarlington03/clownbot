const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.login(token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message',message => {
    if (message.author.bot) return;
    if (message.content.toLowerCase().includes (`:o)`)) {
        message.channel.send(':o)');
    }
    if (message.isMentioned(client.user)) {
        message.channel.send(`c'mere. \nhttps://cdn.discordapp.com/attachments/625150054759530516/638950282751115264/unknown.png`)
    }
    if (message.content.toLowerCase().includes ('clown')) {
        message.react('🤡');
        imageNumber = Math.floor (Math.random() * (39 - 1 + 1)) + 1;
        message.channel.send ( {files: ["./clowns/" + imageNumber + ".png"]} );
    }
    if (message.content.toLowerCase().includes ('jester')) {
        message.react('🤡');
        imageNumber = Math.floor (Math.random() * (39 - 1 + 1)) + 1;
        message.channel.send ( {files: ["./clowns/" + imageNumber + ".png"]} );
    }
    if (message.content.toLowerCase().includes ('joke')) {
        message.react('🤡');
        imageNumber = Math.floor (Math.random() * (39 - 1 + 1)) + 1;
        message.channel.send ( {files: ["./clowns/" + imageNumber + ".png"]} );
    }
    if (message.content.toLowerCase().includes ('joker')) {
        message.react('🤡');
        imageNumber = Math.floor (Math.random() * (39 - 1 + 1)) + 1;
        message.channel.send ( {files: ["./clowns/" + imageNumber + ".png"]} );
    }
    if (message.content.toLowerCase().includes ('trick')) {
        message.react('🤡');
        imageNumber = Math.floor (Math.random() * (39 - 1 + 1)) + 1;
        message.channel.send ( {files: ["./clowns/" + imageNumber + ".png"]} );
    }
    if (message.content.toLowerCase().includes ('circus')) {
        message.react('🤡');
        imageNumber = Math.floor (Math.random() * (39 - 1 + 1)) + 1;
        message.channel.send ( {files: ["./clowns/" + imageNumber + ".png"]} );
    }
    if (message.content.toLowerCase().startsWith ('who'))  {
        imageNumber = Math.floor (Math.random() * (39 - 1 + 1)) + 1;
        message.channel.send ( {files: ["./clowns/" + imageNumber + ".png"]} );
    }
    if (message.content.toLowerCase().startsWith ('what'))  {
        imageNumber = Math.floor (Math.random() * (39 - 1 + 1)) + 1;
        message.channel.send ( {files: ["./clowns/" + imageNumber + ".png"]} );
    }
    if (message.content.toLowerCase().startsWith ('when'))  {
        imageNumber = Math.floor (Math.random() * (39 - 1 + 1)) + 1;
        message.channel.send ( {files: ["./clowns/" + imageNumber + ".png"]} );
    }
    if (message.content.toLowerCase().startsWith ('where'))  {
        imageNumber = Math.floor (Math.random() * (39 - 1 + 1)) + 1;
        message.channel.send ( {files: ["./clowns/" + imageNumber + ".png"]} );
    }
    if (message.content.toLowerCase().startsWith ('why')) {
        imageNumber = Math.floor (Math.random() * (39 - 1 + 1)) + 1;
        message.channel.send ( {files: ["./clowns/" + imageNumber + ".png"]} );
    }
    if (message.content.toLowerCase().startsWith ('how')) {
        imageNumber = Math.floor (Math.random() * (39 - 1 + 1)) + 1;
        message.channel.send ( {files: ["./clowns/" + imageNumber + ".png"]} );
    }
    if (message.content.toLowerCase().startsWith ('is')) {
        imageNumber = Math.floor (Math.random() * (39 - 1 + 1)) + 1;
        message.channel.send ( {files: ["./clowns/" + imageNumber + ".png"]} );
    }
    if (message.content.toLowerCase().startsWith ('help')) {
        message.channel.send({files: ["./clowns/26.png"]});
    }
    if (message.content.toLowerCase().includes ('sham')) {
        message.react("638706867052478514");
        imageNumber = Math.floor (Math.random() * (42 - 1 + 1)) + 1;
        message.channel.send ( {files: ["./shammys/" + imageNumber + ".png"]} );
    }
    if (message.content.toLowerCase().includes ('chamois')) {
        message.react("638706867052478514");
        imageNumber = Math.floor (Math.random() * (42 - 1 + 1)) + 1;
        message.channel.send ( {files: ["./shammys/" + imageNumber + ".png"]} );
    }
})

client.on('guildCreate', guild => {
    defaultChannel = "";
    guild.channels.forEach((channel) => {
        if(channel.type == "text" && defaultChannel == "") {
            if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
            defaultChannel = channel;
            }
        }
    })
    //defaultChannel will be the channel object that it first finds the bot has permissions for
    defaultChannel.send({files: ["./clowns/19.png"]});
})