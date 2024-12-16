import express from 'express'
import cors from 'cors'
import expenseRouter from './routs/expense.rout'
import settingsRouter from './routs/stting.rout'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/expense', expenseRouter)
app.use('/api/stting', settingsRouter)

app.listen(3000, ()=> {
  console.log(`[Server] is up and runing no port 3000`)
})