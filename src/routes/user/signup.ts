// Роуты (то, что можно запросить по ссылке
import { RouteHandler } from "../../interfaces/routeHandler";
import { HttpTypes } from "../../enums/httpTypes";
import {userService} from "../../services/user/userService";

export const userSignup: RouteHandler = {
    url: "/signup",
    requestType: HttpTypes.post,
    handler: async (req, res) => {
        try {
            const body = req.body;
            const newUser = await userService.signup(body);
            console.log(newUser,1111);
            res.json(newUser);
        } catch (e) {
            console.log(e.message);
        }
    }
}