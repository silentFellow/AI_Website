import express from 'express'
import eventModel from '../models/eventModel.js'

const router = express.Router()

router.get('/add', async (req, res) => {
  const data = req.body
  try {
    await eventModel.create(data)
    res.status(200).send('Successsfully added.')
  }
  catch(e) {
    res.status(500).send(e)
  }
})

router.put('/update/:id', async (req, res) => {
  const data = req.body
  const userId = req.params.id
  if(userId.length != 12 && userId.length != 24) res.status(201).send('invalid id')
  try {
    const result = await eventModel.findById(userId)
    if(result) {
      await eventModel.findByIdAndUpdate(userId, data, {new: true})
      res.status(200).send('updated successfully.')
    }
    else res.status(201).send('event not found.')
  }
  catch(e) {
    console.log(e)
  }
})

export { router as eventRouter }