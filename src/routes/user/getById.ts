// роут хендер
import { RouteHandler } from "../../interfaces/routeHandler";
import { HttpTypes } from "../../enums/httpTypes";
import { User } from "../../models/user";

export const userByIdGet: RouteHandler = {
    uri: "/user/:id",
    requestType: HttpTypes.get,
    handler: async (req, res) => {
        const id: number = +req.params.id
        const users = await User.findOne({ where: { id } })
        res.json(users)
    }
}