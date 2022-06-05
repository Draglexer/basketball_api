// Роуты (то, что можно запросить по ссылке
import { RouteHandler } from "../../../../basketball_api-main/src/interfaces/routeHandler";
import { HttpTypes } from "../../../../basketball_api-main/src/enums/httpTypes";
import {userService} from "../../../../basketball_api-main/src/services/user/userService";

export const userSignup: RouteHandler = {
    url: "/team",
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