// роут хендлер
import { RouteHandler } from "../../../../basketball_api-main/src/interfaces/routeHandler";
import { HttpTypes } from "../../../../basketball_api-main/src/enums/httpTypes";

import {userService} from "../../../../basketball_api-main/src/services/user/userService";

export const userByIdGet: RouteHandler = {
    url: "/team/:id",
    requestType: HttpTypes.get,
    handler: async (req, res) => {
        try {
            const id : string = req.params.id
            if(!id) throw Error("нема айдишника")
            const users = userService.getById(id);
            res.json(users);
        } catch (e) {
            console.log(e);
        }
    }
}