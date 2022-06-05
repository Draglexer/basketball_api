// Роуты (то, что можно запросить по ссылке
import { RouteHandler } from "../../../../basketball_api-main/src/interfaces/routeHandler";
import { HttpTypes } from "../../../../basketball_api-main/src/enums/httpTypes";
import {userService} from "../../../../basketball_api-main/src/services/user/userService";
import {User} from "../../../../basketball_api-main/src/models";

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