// Модель user
import { DataTypes, Model, Sequelize } from "sequelize";

export class User extends Model {
    declare id: number;
    declare firstName: string;
    declare middleName: string;
    declare lastName: string;
}