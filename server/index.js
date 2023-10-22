import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

import { userRouter } from './routers/userRouter.js'
import { eventRouter } from './routers/eventRouter.js'

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 9999

try {
  mongoose.connect(process.env.MONGOOSE_URL)
  const db = mongoose.connection
  db.once('open', async () => {
    console.log('Yoh! database was connectted successfully')
  })
}
catch(e) {
  console.log(e)
}

app.use('/users', userRouter)
app.use('/events', eventRouter)

app.listen(PORT, () => console.log(`App started at http://localhost:${PORT}`))