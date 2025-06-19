import { Sequelize } from "sequelize"

import databaseConfig from '../Config/database'

import User from '../App/models/user'

const models = [User]

class Database {
    constructor() {
        this.connection = new Sequelize(databaseConfig)
        this.init()
    }

    init() {
        models.forEach((model) => model.init(this.connection))
    }
}

export default new Database()