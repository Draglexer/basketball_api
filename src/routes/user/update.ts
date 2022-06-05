// Роуты (то, что можно запросить по ссылке
import { RouteHandler } from "../../interfaces/routeHandler";
import { HttpTypes } from "../../enums/httpTypes";
import {userService} from "../../services/user/userService";

export const userSignup: RouteHandler = {
    url: "/user",
    requestType: HttpTypes.put,
    handler: async (req, res) => {
        try {
            const body = req.body;
            // @ts-ignore
            const id : string = req.params.id;
            if(!id) throw Error("нема айдишника");
            // @ts-ignore
            userService.update({});
            res.json("запрос работает!")
        } catch (e) {
            console.log(e.message);
        }
    }
}