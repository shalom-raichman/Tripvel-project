import express, { Request, Response } from 'express'
import cors from 'cors'
import expenseRouter from './routs/expense.rout'
import settingsRouter from './routs/stting.rout'
import { connectToMongo } from './config/db'

const app = express()

connectToMongo()

app.use(
  cors({
    origin: '*',
    methods: '*',
  })
)
app.use(express.json())

app.use('/api/expense', expenseRouter)

app.use('/api/settings', settingsRouter)

// error handling
app.use(async (req: Request, res: Response) => {
  res.send()
})

app.listen(3000, () => {
  console.log(`[Server] is up and runing no port 3000`)
})
