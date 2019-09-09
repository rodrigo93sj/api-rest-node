const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

module.exports = () => {
  const TaskSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: true
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    completed: {
      type: Boolean,
      required: true,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  })

  const Task = mongoose.model('Task', TaskSchema)

  return { Task }
}