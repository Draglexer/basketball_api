// Роуты (то, что можно запросить по ссылке
import { RouteHandler } from "../../interfaces/routeHandler";
import { HttpTypes } from "../../enums/httpTypes";
import {userService} from "../../services/user/userService";

export const userLogin : RouteHandler = {
    url: "/login",
    requestType: HttpTypes.post,
    handler: async (req, res) => {
        try {
            // обращаемся к нашему сервису, который логинет юзера
            // @ts-ignore
            const users = await userService.login({});
            res.json(users)
        } catch (e) {
            console.log(e.message,311);
        }
    }
}