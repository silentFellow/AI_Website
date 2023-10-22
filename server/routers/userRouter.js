import express from 'express'
import userModel from '../models/userModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const data = await userModel.find()
    res.status(200).send(data)
  }
  catch(e) {
    res.status(500).send(e)
  }
})

router.get('/login/:userName', async (req, res) => {
  const userName = req.params.userName
  try {
    const result = await userModel.findOne( {userName} )
    if(result) res.status(200).send(result)
    else res.status(201).send('user not found.')
  }
  catch(e) {
    res.status(200).send(e)
  }
})

router.post('/add', async (req, res) => {
  const data = req.body
  try {
    const result = await userModel.findOne( {'userName': data.userName} )
    if(result) res.status(201).send('username already existed.')
    else {
      await userModel.create(data)
      res.status(200).send('successfully registered.')
    }
  }
  catch(e) {
    res.status(500).send(e)
  }
})

router.delete('/remove/:userName', async (req, res) => {
  const userName = req.params.userName
  try {
    const result = await userModel.findOne( {userName} )
    if(result) {
      await userModel.findOneAndDelete( {userName} )
      res.status(200).send('user deleted successfully.')
    }
    else res.status(201).send('user not found.')
  }
  catch(e) {
    res.status(500).send(e)
  }
})

export { router as userRouter }