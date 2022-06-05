import {Model, Optional} from "sequelize";

export interface TeamInTournamentAttrs {
    id : number,
    teamId : number
    tournamentId : number;
    countGames : number;
    countWins : number;
    countDefeats : number;
    points : number;
}

export interface TeamInTournamentAttrsCreationAttrs extends Optional<TeamInTournamentAttrs, 'id'> {}

export class TeamInTournament extends Model<TeamInTournamentAttrs, TeamInTournamentAttrsCreationAttrs> implements TeamInTournamentAttrs {
    declare public id : number; // id команды
    declare public teamId : number // id команды
    declare public tournamentId : number; // id турнира
    declare public countGames : number; // кол-во игр
    declare public countWins : number; // кол-во побед
    declare public countDefeats : number; // кол во поражений;
    declare public points : number; // кол-во очков за этот турнир, это "кол-во побед" умноженное на 1
    declare public readonly createdAt : Date; // дата создания, при создании не указывать
    declare public readonly updatedAt : Date; // дата измненения, при создании не указывать
}