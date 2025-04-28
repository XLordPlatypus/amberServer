import { Elysia } from "elysia";
import {dbConnect, dbSetup} from "./db/db";

const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

dbConnect()
await dbSetup()