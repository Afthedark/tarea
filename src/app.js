
import express from 'express'
import morgan from 'morgan'

const app = express()

//Importacion de rutas
import usersRoutes from './routes/users.routes.js'
import tasksRoutes from './routes/tasks.routes.js'

//Midleware
app.use(morgan('dev'))

// Rutas
app.use('/api/users', usersRoutes)
app.use('/api/tasks', tasksRoutes)

export default app




