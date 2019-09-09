const nodemailer = require('nodemailer')
const { host, port, secure, user, pass } = require('../config/mail.json')

const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: {
    user,
    pass
  }
})

module.exports = transporter
