import {createSnake, getAllSnakes, getSnake, updateSnake} from "../services/snakeService";
import {Elysia} from "elysia";
import {Snake} from "../db/schema/snakeSchema";

const snakeRouter = new Elysia({ prefix: '/snake' })

snakeRouter.get('/', async ({ set }) => {
    try {
        return { success: true, data: await getAllSnakes() }
    } catch (e) {
        set.status = 500
        return { success: false, data: e?.toString() }
    }
})

snakeRouter.get('/:id', async ({ params, set }) => {
    try {
        const id = Number(params.id)
        return { success: true, data: await getSnake(id) }
    } catch (e) {
        set.status = 500
        return { success: false, data: e?.toString() }
    }
})

snakeRouter.post('/', async ({ body, set }) => {
    try {
        const newSnake = body as Snake
        await createSnake(newSnake)
        set.status = 201
        return { success: true, data: {} }
    } catch (e) {
        set.status = 500
        return { success: false, data: e?.toString() }
    }
})

snakeRouter.put('/', async ({ body, set }) => {
    try {
        const snakeToUpdate = body as Snake
        await updateSnake(snakeToUpdate)
        return { success: true, data: {} }
    } catch (e) {
        set.status = 500
        return { success: false, data: e?.toString() }
    }
})

export default snakeRouter;