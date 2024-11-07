import mongoose from 'mongoose'

const dbConnect = async () => {
  if (mongoose.connections[0].readyState) {
    return // Already connected
  }
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

export default dbConnect
