import { Router, Response } from 'express'

const routes = Router()

routes.get('/', (req, res): Response => {
  return res.send('cheguei')
})

export default routes
