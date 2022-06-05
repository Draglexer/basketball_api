// роут хендлер
import { RouteHandler } from "../../interfaces/routeHandler";
import { HttpTypes } from "../../enums/httpTypes";

import {userService} from "../../services/user/userService";

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