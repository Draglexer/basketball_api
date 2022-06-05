// Роуты (то, что можно запросить по ссылке
import { RouteHandler } from "../../interfaces/routeHandler";
import { HttpTypes } from "../../enums/httpTypes";
import { User } from "../../models";

export const userGet: RouteHandler = {
    url: "/user",
    requestType: HttpTypes.get,
    handler: async (req, res) => {
        const users = await User.findAll()
        res.json(users)
    }
}