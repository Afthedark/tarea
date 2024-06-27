
import app from './app.js'
import 'dotenv/config'
import logger from './logs/logger.js'

import { Sequelize } from './database/database.js'

//Funcion para ejecutar el servidor
async function main() {
    await sequelize.sync({ force})

    const port = process.env.PORT
    app.listen(port)
    console.log('Listening on port', port)
    logger.info(`Listening on port ${port}`)
    logger.warn(`Listening on port ${port}`)
}

main()