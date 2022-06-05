import {Team, User,Game, TeamInTournament,Tournament,Location} from "../models";
import { db } from "./db"
import {DataTypes, Model} from "sequelize";


// описываю связи моделей
export async function relatingModels () {

    await Team.hasMany(User, { foreignKey : 'userId'});
    await User.belongsTo(Team, { foreignKey : "teamId"});

    await User.hasMany(Tournament, {foreignKey : 'id'});
    await Tournament.belongsTo(User, {foreignKey : 'userId'});

    await Team.hasMany(TeamInTournament, { foreignKey : 'id'});
    await TeamInTournament.belongsTo(Team, { foreignKey : 'teamId'});

    await Tournament.hasMany(TeamInTournament, { foreignKey : 'id'});
    await TeamInTournament.belongsTo(Tournament, { foreignKey : 'tournamentId'});

    await Tournament.hasMany(Game, { foreignKey : 'id'});
    await Game.belongsTo(Tournament, { foreignKey : 'tournamentId'});

    await TeamInTournament.hasMany(Game, { foreignKey : 'id'});
    await Game.belongsTo(TeamInTournament, { foreignKey : 'team1Id'});
    await Game.belongsTo(TeamInTournament, { foreignKey : 'team2Id'});
    await Game.belongsTo(TeamInTournament, { foreignKey : 'winningTeamId'});

    await Location.hasMany(Game,{ foreignKey : 'id'});
    await Game.belongsTo(Location, { foreignKey : 'locationId'});
}