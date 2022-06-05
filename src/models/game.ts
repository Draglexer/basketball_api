import {Model, Optional} from "sequelize";

export interface GameAttrs {
    id : number,
    team1Id : number;
    team2Id : number;
    countPointsTeam1 : number;
    countPointsTeam2 : number;
    winningTeamId : number;
    dateEvent : string;
    tournamentId : number;
    venueId : number;
}

export interface GameCreationAttrs extends Optional<GameAttrs, 'id'> {}

export class Game extends Model<GameAttrs, GameCreationAttrs> implements GameAttrs {
    declare public id : number; // id матча, при создании не указывать
    declare public team1Id : number; // id первой команды, указывать
    declare public team2Id : number; // id второй команды, указывать
    declare public countPointsTeam1 : number;
    declare public countPointsTeam2 : number;
    declare public winningTeamId : number;
    declare public dateEvent : string;
    declare public tournamentId : number;
    declare public venueId : number;
    declare public readonly createdAt : Date; // дата создания, при создании не указывать
    declare public readonly updatedAt : Date; // дата измненения, при создании не указывать
}