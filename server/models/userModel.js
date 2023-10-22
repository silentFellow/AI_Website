import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userName: {
    type: String
  }, 
  password: {
    type: String
  }, 
  role: {
    type: String
  }
})

export default mongoose.model('users', userSchema)