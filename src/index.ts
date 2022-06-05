import express from "express"
import { initDb } from './dataBase/db'
import { routeHandlers } from "./routes";
import { HttpTypes } from "./enums/httpTypes";
import { RouteHandler } from "./interfaces/routeHandler";
import cors from "cors";

export const app = express();
const port = process.env.PORT || 8080; // default port to listen

app.use(cors())
app.use(express.json())

const routeHandlerMapper: Partial<Record<HttpTypes, (v: RouteHandler) => void>> = {
    [HttpTypes.get]: (v) => app.get(v.url, v.handler),
    [HttpTypes.post]: (v) => app.post(v.url, v.handler),
    [HttpTypes.put]: (v) => app.put(v.url, v.handler),
    [HttpTypes.patch]: (v) => app.patch(v.url, v.handler),
    [HttpTypes.delete]: (v) => app.delete(v.url, v.handler),
}

routeHandlers.forEach(x => routeHandlerMapper[x.requestType](x))
// define a route handler for the default home page
app.get("/", async (req, res) => {
    res.send("Hello world!");
});

// start the Express server
app.listen(port, async () => {
    await initDb()
    console.log(`server started at http://localhost:${ port }`);
});