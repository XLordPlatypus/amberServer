import {snakeSchema} from "../db/schema/snakeSchema";
import {db} from "../db/db";
import {eq} from "drizzle-orm";
import {Snake} from "../db/schema/snakeSchema";

export const getAllSnakes = () => {
    return db.select().from(snakeSchema);
}

export const getSnake = (id: number) => {
    return db.select().from(snakeSchema).where(eq(snakeSchema.id, id));
}

export const createSnake = (snake: Snake) => {
    return db.insert(snakeSchema).values(snake);
}

export const updateSnake = (snake: Snake) => {
    if (!snake.id) {
        throw new Error("Snake ID is required for update");
    }

    return db.update(snakeSchema)
        .set(snake)
        .where(eq(snakeSchema.id, snake.id));
}