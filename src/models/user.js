
import { Status } from "constants";
import { sequelize } from "../database/database";


export const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull:{
                msg: 'Ingrese nombre de usuario'
            },
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    validate: {
        notNull:{
            msg: 'Ingrese password'
        },
    },
    status:{
        type: DataTypes.STRING,
        defaultValue: 'active'
    },
    validate:{
        isIn:{
            arg: [['active', 'inactive']],
            msg: 'Debe ser active o inactive'
        }
    }
})