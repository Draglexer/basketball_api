import {Team} from "../../models";

class TeamService {

    // async getAll () : Promise<Team[] | null> {
    //     return await Team.findAll();
    // };
    //
    // async getById (id ?: string) : Promise<Team | null> {
    //     return await Team.findOne({ where: { id : +id } });
    // };
    //
    // // @ts-ignore
    // async create (team : Team)  : Promise<Team | null> {
    //     //
    // };
    //
    // // @ts-ignore
    // async update (userId : number,user : Team) : Promise<Team | null> {
    //     //
    // };
    //
    // // @ts-ignore
    // async remove ( userId : number) : Promise<boolean | null> {
    //
    // };
}
export const teamService = new TeamService();