// подключение к бд, определение модделей и создание таблиц
import { DataTypes, Model, Sequelize } from 'sequelize'
import { User } from "./models/user";

export const db = new Sequelize('postgres://postgres:root@localhost:5432/diploma') // Example for postgres

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        defaultValue: ""
    },
    middleName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lastName: {
        type: DataTypes.STRING,
        defaultValue: ""
    }
}, { sequelize: db, tableName: "users" });

export async function initDb() {
    await User.sync({ alter: true });
}