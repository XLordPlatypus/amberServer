import {Client} from "pg";
import {drizzle} from "drizzle-orm/node-postgres";

const client = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: 'localhost' || process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_NAME
})

export const db = drizzle(client)

export const dbConnect = () => {
    client.connect()
        .then(() => {
            console.log('Connected to DB: ' + client.database + ' on port: ' + client.port)
        })
        .catch(e => {
            console.error('DB Connection failed! ' + e)
        })
}