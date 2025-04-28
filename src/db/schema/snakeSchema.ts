import {date, integer, pgTable, varchar} from "drizzle-orm/pg-core";

export const snakeSchema = pgTable('snake', {
    id: integer(),
    name: varchar(),
    last_feeding_date: date(),
    feeding_interval: date(),
})