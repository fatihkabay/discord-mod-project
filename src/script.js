import { Client, IntentsBitField} from 'discord.js';

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on('ready', (e) => {
   console.log(`✅${e.user.tag} is online!`)
})

client.login("MTE1NTU4NDU4MjU3ODYwMjEwNQ.G39ybC.f3tOAv7aUJydUcpBhxKsHS-aWkRwmVs3N3K2R0")