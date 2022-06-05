// Модель user
import {Model, Optional} from "sequelize";
import {UserAmpluaType, UserGenderType} from "./types/userTypes";

export interface UserAttrs {
    id : number,
    firstName : string
    middleName: string;
    lastName: string;
    email : string;
    password : string;
    birthDate : Date;
    height : number;
    weight : number;
    amplua : UserAmpluaType;
    gender : UserGenderType;
    teamId : number;
    role : number;
    createdAt : Date;
    updatedAt : Date;
}

export interface UserCreationAttrs extends Optional<UserAttrs, 'id'> {}

export class User extends Model<UserAttrs, UserCreationAttrs> implements UserAttrs {
    declare public id: number;// id, при создании не указывать
    declare public firstName : string; // фамалия
    declare public middleName: string; // имя
    declare public lastName: string; // отчество
    declare public email : string; // почта
    declare public password : string; // пароль
    declare public birthDate : Date; // дата рождения
    declare public height : number; // рост
    declare public weight : number; // вес
    declare public amplua : UserAmpluaType; // амплуа : number ( 0 - атакующий, 1 - защинтник, 2 - центровой )
    declare public gender : UserGenderType; // пол : number ( 0 - мужчина, 1 - женщина )
    declare public teamId : number; // id команды
    declare public role : number // тип пользователя : number (по дэфолту - 0) ( 0 - участник, 1 - организотор, 2 - администратор )
    declare readonly createdAt : Date; // дата создания, при создании не указывать
    declare readonly updatedAt : Date; // дата измненения, при создании не указывать
}