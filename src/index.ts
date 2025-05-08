import { Elysia } from "elysia";
import {dbConnect} from "./db/db";
import snakeRouter from "./controllers/snakeController";

const app = new Elysia()
app.use(snakeRouter)
    .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

dbConnect()