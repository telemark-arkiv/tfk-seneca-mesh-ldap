'use strict'

module.exports = function search (options, callback) {
  const client = options.client

  const opts = {
    filter: options.filter.replace('{{username}}', options.user),
    scope: options.scope,
    attributes: options.attributes
  }

  let entryRes = {}

  client.search(options.baseDn, opts, function (err, res) {
    if (err) {
      return callback(err)
    }

    res.on('searchEntry', function (entry) {
      entryRes = entry.object
    })
    res.on('searchReference', function (referral) {
      console.log('referral: ' + referral.uris.join())
    })
    res.on('error', function (err) {
      return callback(err)
    })
    res.on('end', function (result) {
      result.entry = entryRes
      return callback(null, result)
    })
  })
}
