import {getAllSnakes, getSnake} from "../services/snakeService";


// TODO: Statuscodes?
const getAll = () => {
    try {
        return { success: true, data: getAllSnakes() }
    } catch (e) {
        return { success: false, data: e }
    }
}

const get = (id: number) => {
    try {
        return getSnake(id)
    } catch (e) {

    }
}

const create = () => {
    try {

    } catch (e) {

    }
}

const update = () => {
    try {

    } catch (e) {

    }
}