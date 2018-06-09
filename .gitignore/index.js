const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Tera");
    console.log("Connected");
});

bot.login("NDU0OTA0Mzk1Mzk0NDQ5NDA4.Df2RYA.V1BikeZ1Uj6jsPjErWjDJghFZvs");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Coucou beauté");
        console.log("Commande Salut effectué");
    }
});


bot.login("NDU0OTA0Mzk1Mzk0NDQ5NDA4.Df2RYA.V1BikeZ1Uj6jsPjErWjDJghFZvs");
var prefix = ("*");


    bot.on("guildMemberAdd", member => {
        member.guild.channels.find("name", "général").send(`Bienvenue ${member} soit courageux t'as certain cas.`);
    })

    bot.on("guildMemberRemove", member => {
        member.guild.channels.find("name", "général").send(`${member} vient de fuir, je vous félicite pas.`)
    })

    bot.on('guildMemberAdd', member => {
        var role = member.guild.roles.find('name', 'Membre');
        member.addRole(role)
    })


    var prefix = ("*")

    bot.login("NDU0OTA0Mzk1Mzk0NDQ5NDA4.Df2RYA.V1BikeZ1Uj6jsPjErWjDJghFZvs");

    bot.on('message', message => {
        let command = message.content.split(" ")[0];
        const args = message.content.slice(prefix.length).split(/ +/);
        command = args.shift().toLowerCase();

        if (command === "kick") {
            let modRole = message.guild.roles.find("name", "Test");
            if(!message.member.roles.has(modRole.id)) {
                return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
            }
            if(message.mentions.users.size === 0) {
                return message.reply("Oui mais qui?").catch(console.error);
            }
            let kickMember = message.guild.member(message.mentions.users.first());
            if(!kickMember) {
                return message.reply("Cet utilisateur est introuvable ou impossible à expulser.")
            }
            if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
                return message.reply("Je n'ai pas la permission KICK_MEMBERS pour faire ceci.").catch(console);
            }
            kickMember.kick().then(member => {
                message.reply(`${member.user.username} a été expulsé sans problème.`).catch(console.error);
                message.guild.channels.find("name", "général").send(`**${member.user.username} a été expulsé du discord par **${message.author.username}**`)
            }).catch(console.error)

        }

        if (command === "ban") {
            let modRole = message.guild.roles.find("name", "Test");
            if(!message.member.roles.has(modRole.id)) {
                return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
            }
            const member = message.mentions.members.first();
            if (!member) return message.reply("Comme pour kick, faut me dire qui. Baka.");
            member.ban().then(member => {
                message.reply(`${member.user.username} a été banni sans problème.`).catch(console.error);
                message.guild.channels.find("name", "général").send(`**${member.user.username}** a été banni du discord par **${message.author.username}**`)
            }).catch(console.error)
    }})
