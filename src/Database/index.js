import { Sequelize } from "sequelize"

import databaseConfig from "../Config/database"

import User from "../App/models/user"

const models = [User]

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(databaseConfig)
        models.map((model) => model.init(this.connection))
    }
}

export default new Database()