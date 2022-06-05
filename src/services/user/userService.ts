import {User} from "../../models";

class UserService {

    async getAll () : Promise<User[] | null> {
        return await User.findAll();
    };

    async getById (id ?: string) : Promise<User | null> {
        return  await User.findOne({ where: { id : +id } });
    };


    async signup (user : any) : Promise<User | null> {
        return await User.create(user);
    };
    //
    // // @ts-ignore
    // async login (email : string, password : string) : Promise<boolean | null> {
    //
    // };
    //
    // // @ts-ignore
    // async update (userId : number,user : User) : Promise<User | null> {
    //     //
    // };
    //
    // // @ts-ignore
    // async remove (userId : number) : Promise<boolean | null> {
    //
    // };
    //
    // // @ts-ignore
    // async checkUserToken (token : string) : Promise<boolean | null> {
    //
    // }
}
export const userService = new UserService();