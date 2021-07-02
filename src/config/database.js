const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true }, { useUnifiedTopology: true })

mongoose.Error.messages.general.required = "'{PATH}' attribute is required."
mongoose.Error.messages.Number.min = "The '{VALUE}' entered is less than the minimum limit of: '{MIN}'."
mongoose.Error.messages.Number.min = "The '{VALUE}' entered is greater than the maximum limit of: '{MAX}'."
mongoose.Error.messages.String.enum = "'{Value}' is not valid for attribute '{PATH}'."
