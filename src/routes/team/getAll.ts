// Роуты (то, что можно запросить по ссылке
import { RouteHandler } from "../../../../basketball_api-main/src/interfaces/routeHandler";
import { HttpTypes } from "../../../../basketball_api-main/src/enums/httpTypes";
import { userService } from "../../../../basketball_api-main/src/services/user/userService";

export const userGetAll: RouteHandler = {
    url: "/team",
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