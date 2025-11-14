import Fastify from 'fastify'
import { studentRoutes } from './routes/students.routes.js'
import { teacherRoutes } from './routes/teachers.routes.js'

const app = Fastify({ logger: true })

app.register(studentRoutes)
app.register(teacherRoutes)

app.listen({ port: 3333 })
  .then(address => {
    console.log(`🚀 Servidor rodando em: ${address}`)
  })
  .catch(err => {
    app.log.error(err)
    process.exit(1)
  })