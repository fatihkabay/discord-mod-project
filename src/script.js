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

client.on('messageCreate', (message) => {
   if(message.content === 'am i messi?') {
      message.reply('You are Messi definitely!')
   }
})

client.on('messageCreate', (message) => {
    if(message.author.bot) {
        return;
    }

    if(message.content === 'hi') {
       message.reply('Hello!')
    }
 })

client.login("MTE1NTU4NDU4MjU3ODYwMjEwNQ.G6drKM.uM7ZM-O7jOQgpw7jJKKvVfHWIXF0ZJUvHGrFyA")