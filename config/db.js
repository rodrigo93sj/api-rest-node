const mongoose = require('mongoose')
const { mongodb_url } = require('../.env')

mongoose.connect(mongodb_url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Conectado ao MongoDB')
}).catch(error => {
    const msg = 'Erro ao conectar ao MongoDB'
    console.log(msg)
})