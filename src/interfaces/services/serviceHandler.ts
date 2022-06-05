// интерфейс хендлер для сервисов
import { RequestHandler } from "express";
import { HttpTypes } from "../../enums/httpTypes";

export interface RouteHandler {
    url: string
    requestType: HttpTypes
    handler: RequestHandler
}