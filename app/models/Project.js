const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

module.exports = () => {
  const ProjectSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    tasks: [{
      type: Schema.Types.ObjectId,
      ref: 'Task'
    }],
    createdAt: {
      type: Date,
      default: Date.now
    }
  })

  const Project = mongoose.model('Project', ProjectSchema)

  return { Project }
}