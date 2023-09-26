import { Client } from "discord.js";

const client = new Client({ intents: ["Guild", "GuildMessages"]});

const TOKEN = 'MTE1NTU4NDU4MjU3ODYwMjEwNQ.GX4H-1._ZzVPhM5ggzD1tkd-30hRpk1tlityTv8qMyEdE';
client.login(TOKEN);