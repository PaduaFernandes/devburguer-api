import User from "../models/user"
import { v4 } from "uuid"

class UserController {

    async store(request, response) {
        const { name, email, password_hash, admin } = request.body

        const user = await User.create({
            id: v4(),
            name,
            email,
            password_hash,
            admin,
        })

        return response.status(201).json(user)
    }
}

export default new UserController()
