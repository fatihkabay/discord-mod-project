import { REST, Routes } from 'discord.js';

const commands = [
    {
        name: "hey",
        description: "Replies with hey!"
    }
]

const rest = new REST({version: '10'}).setToken('MTE1NTU4NDU4MjU3ODYwMjEwNQ.GNx-6p.6aINOWUK_OxAAbT__QtvOwKM2zySNSBqIEPjdY')

async function registerFunc() {
    try {
        console.log("Registering slash commands...")

        await rest.put(
           Routes.applicationGuildCommand('1155584582578602105', '1155964646457626696'),
           { body: commands }
        )

        console.log("Slash commands were registered sucessfully!")
    } catch (error) {
        console.log(`There was an error: ${error}`)
    }
}

registerFunc();

