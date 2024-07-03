
import 'dotenv/config'
//import { Sequelize } from "sequelize"
//import { Status } from "../constants/index.js"
const Sequelize = require('sequelize').Sequelize
const { Status } = require('../constants/index.js')

export const sequelize = new Sequelize(
    process.env.DB_DATABASE, //db name
    process.env.DB_USER,   //username  
    process.env.DB_PASSWORD, //password
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: console.log,

    }
)




