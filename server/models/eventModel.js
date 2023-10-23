import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  name: {
    type: String
  }, 
  link: {
    type: String
  }, 
  description: {
    type: String
  }, 
  rules: {
    type: String
  }, 
  postedAt: {
    type: Date, 
    default: Date.now
  }, 
  expireAt: {
    type: Date, 
    default: Date.now
  }
})

const eventModel = mongoose.model('events', eventSchema)

const createTTLIndex = async () => {
  await eventModel.createCollection()
  await eventModel.collection.createIndex({expireAt: 1}, {expireAfterSeconds: 0})
  console.log('TTL index created.')
}
createTTLIndex()

export default eventModel