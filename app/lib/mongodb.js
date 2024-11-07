// lib/mongodb.js
import mongoose from 'mongoose'

const connectMongo = async () => {
  if (mongoose.connection.readyState >= 1) return
  return mongoose.connect(process.env.MONGODB_URI)
}

export default connectMongo
