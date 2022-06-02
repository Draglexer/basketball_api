import { userByIdGet } from "./user/getById";
import { userGet } from "./user/get";

export const routeHandlers = [
    userByIdGet,
    userGet
]