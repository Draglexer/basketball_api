// Роуты (то, что можно запросить по ссылке
import { RouteHandler } from "../../interfaces/routeHandler";
import { HttpTypes } from "../../enums/httpTypes";
import { userService } from "../../services/user/userService";

export const userGetAll: RouteHandler = {
    url: "/user",
    requestType: HttpTypes.get,
    handler: async (req, res) => {
        try {
            // обращаемся к нашему сервису, который отдаёт всех пользователй
            const users = await userService.getAll();
            res.json(users)
        } catch (e) {
            console.log(e.message,311);
        }
    }
}