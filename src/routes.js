import { Router } from "express"
import User from "./App/models/user"
import { v4 } from "uuid"

const routes = new Router()

routes.get('/', async (request, response) => {
    const user = await User.create({
        id: v4(),
        name: 'PaduaFernandes2',
        email: 'paduafernandes2@yahoo.com',
        password_hash: '12asr3456789',
    })

    return response.status(201).json(user)
})

export default routes
