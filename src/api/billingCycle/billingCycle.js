const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, require: true }
})

const debtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, require: true },
    status: { type: String, require: false, uppercase: true, enum: ['Pay', 'Pending', 'Planned'] }
})

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, require: true },
    month: { type: Number, min: 1, max: 12, require: true},
    year: { type: Number, min: 1970, max: 2100, require: true},
    credits: [creditSchema],
    debts: [debtSchema]
})

moodule.exports = restful.model('Billingcycle', billingCycleSchema)
