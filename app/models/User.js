// models/User.js
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['admin', 'teacher', 'student', 'parent'],
    required: true,
  },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
