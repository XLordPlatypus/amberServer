import {snakeSchema} from "../db/schema/snakeSchema";
import {db} from "../db/db";
import {eq} from "drizzle-orm";
import {PgTable} from "drizzle-orm/pg-core";

export const getAllSnakes = () => {
    return db.select().from(snakeSchema);
}

export const getSnake = (id: number) => {
    return db.select().from(snakeSchema).where(eq(snakeSchema.id, id))
}

export const createSnake = (snake: PgTable) => {
    db.insert(snake)
}

export const updateSnake = (snake: PgTable) => {
    db.update(snake)
}