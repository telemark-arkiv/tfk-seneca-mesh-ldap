'use strict'

const config = require('./config')
const ldapAdd = require('./lib/ldapAdd')

let options = config
options.user = 'engj'

ldapAdd(options, function (err, data) {
  if (err) {
    console.error('Error: ' + err)
    process.exit(1)
  } else {
    console.log(data)
    process.exit(0)
  }
})

