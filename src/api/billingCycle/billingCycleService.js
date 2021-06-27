const Billingcycle = require('./billingCycle')

Billingcycle.methods(['get', 'post', 'put', 'delete'])
Billingcycle.updateOptions({new: true, runValidators: true})

module.exports = Billingcycle
