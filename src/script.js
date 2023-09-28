import { config } from "dotenv";
import { Client } from "discord.js";

config();

const client = new Client({ intents: ["Guild", "GuildMessages"]});
const TOKEN = 'MTE1NTU4NDU4MjU3ODYwMjEwNQ.GdS_Lb.OFv6PBIINlqJ1qfGWD5DuDLmaMD04D4xvB8XXQ';

console.log(process.env.TUTORIAL_BOT_TOKEN);

client.login(TOKEN);