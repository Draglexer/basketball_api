// Роуты (то, что можно запросить по ссылке
import { RouteHandler } from "../../interfaces/routeHandler";
import { HttpTypes } from "../../enums/httpTypes";
import {userService} from "../../services/user/userService";
import {User} from "../../models";

export const teamCreate: RouteHandler = {
    url: "/team",
    requestType: HttpTypes.post,
    handler: async (req, res) => {
        try {
            const body = req.body;


            // @ts-ignore
            userService.signup({})
            res.json("запрос работает!")
        } catch (e) {
            console.log(e.message);
        }
    }
}