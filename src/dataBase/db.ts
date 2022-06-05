import {DataTypes, Model, Sequelize} from 'sequelize'
import { defineModels } from "./defineModels";
import {relatingModels} from "./relationshipsModels";
import {Game, Team, TeamInTournament, Tournament, User} from "../models";

export const db = new Sequelize('postgres://postgres:deniskaSUPER12345@localhost:5432/diploma');
// export const db = new Sequelize('postgres://postgres:root@localhost:5432/diploma')
// export const db = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         dialect : "postgres",
//         host : process.env.DB_HOST,
//         port : process.env.DB_PORT as unknown as number
//     }
// )


export async function initDb() {
    try {
        await db.authenticate();
        await defineModels();
        await relatingModels();
        await db.sync({alter: true});
    } catch (e) {
        console.log(e);
    }
}