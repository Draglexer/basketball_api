// тут в массив складываются все хендлеры
import { userByIdGet } from "./user/getById";
import { userGetAll } from "./user/getAll";
import { userSignup } from "./user/signup";
import { userLogin } from "./user/login"

export const routeHandlers = [
    userByIdGet,
    userGetAll,
    userSignup
];