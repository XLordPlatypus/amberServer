import {date, integer, pgTable, serial, varchar} from "drizzle-orm/pg-core";
import { InferInsertModel } from "drizzle-orm";

export const snakeSchema = pgTable('snake', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 100 }).notNull(),
    last_feeding_date: date('last_feeding_date'),
    feeding_interval: integer('feeding_interval'),
})

export type Snake = InferInsertModel<typeof snakeSchema>