import { RouteHandler } from "../../interfaces/routeHandler";
import { HttpTypes } from "../../enums/httpTypes";
import { User } from "../../models/user";

export const userGet: RouteHandler = {
    uri: "/user",
    requestType: HttpTypes.get,
    handler: async (req, res) => {
        const users = await User.findAll()
        res.json(users)
    }
}