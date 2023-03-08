const { Client, GatewayIntentBits, MessageAttachment } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setPresence({
        activities: [{ name: 'with Discord.js' }],
        status: 'online'
    });

    client.guilds.cache.forEach((guild) => {
        console.log(" - " + guild.name)

        guild.channels.cache.forEach(channel => {
            console.log(`${channel.name} (${channel.id}) (${channel.type})`);
        });
        //genera: 1082882934039654462
    })

    var generalChannel = client.channels.cache.get("1082882934039654462") // Replace with known channel ID

    generalChannel.send("Hello, world!")
})

client.on('messageCreate', async (message) => {
    // Prevent bot from responding to its own messages
    if (message.author.bot) return;

    // if (message.mentions.has(client.user.id)) {
    //     message.reply('I have been mentioned in this message!');
    // }

    if (message.content === "ping") {
        message.channel.send("pong");
    }

    if (message.content === "hello") {
        message.channel.send("Hello, " + message.author.toString() + "!");
    }

    if (message.content === "what is my avatar") {
        // Send the user's avatar URL
        message.reply(message.author.displayAvatarURL());
    }

    /* if (message.content === "embed") {
        // Create embed
        const embed = {
            "title": "Some Title",
            "description": "Some Description",
            "url": "https://discord.js.org",
            "color": 15158332,
            "timestamp": "2019-05-05T21:24:44.044Z",
            "footer": {
                "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
                "text": "Some footer text here"
            },
            "thumbnail": {
                "url": "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            "image": {
                "url": "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            "author": {
                "name": "Some name",
                "url": "https://discord.js.org",
                "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            "fields": [
                {
                    "name": "🤔",
                    "value": "Some value here"
                },
                {
                    "name": "😱",
                    "value": "Some value here"
                },
                {
                    "name": "🙄",
                    "value": "Some value here"
                },
                {
                    "name": "<:thonkang:219069250692841473>",
                    "value": "Some value here",
                    "inline": true
                },
                {
                    "name": "<:thonkang:219069250692841473>",
                    "value": "Some value here",
                    "inline": true
                }
            ]
        };
        message.channel.send({ embed });
    } */

    /* if (message.content === "attachment") {
        // Create the attachment using MessageAttachment
        const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    } */

    if (message.content === "react") {
        message.react('👍');
    }

    if (message.content === "delete") {
        message.channel.send("This message will be deleted in 5 seconds");
        setTimeout(() => message.delete(), 5000);
    }

    if (message.content === "edit") {
        message.channel.send("This message will be edited in 5 seconds");
        setTimeout(() => message.edit("This message has been edited"), 5000);
    }

    if (message.content === "pin") {
        message.channel.send("This message will be pinned in 5 seconds");
        setTimeout(() => message.pin(), 5000);
    }

    if (message.content === "unpin") {
        message.channel.send("This message will be unpinned in 5 seconds");
        setTimeout(() => message.unpin(), 5000);
    }

    if (message.content === "help") {
        message.channel.send("```!ping\n!hello\n!what is my avatar\n!react\n!delete\n!edit\n!pin\n!unpin```");
    }

    message.channel.send('Hi There, This is a Sample Discord Bot created by Nabeel Sohail');
    //console.log(message.author.toString() + ": " + message.content);
});

client.login('MTA4Mjg4MzI5MzY1OTI3NTMxNg.GtdR0K.SbbSGYn9Rt2I8gJzu5cbI6VMkY6J5X9IPrN5TY')

