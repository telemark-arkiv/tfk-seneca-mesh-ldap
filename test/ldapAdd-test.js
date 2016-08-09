'use strict'

const tap = require('tap')
const ldapAdd = require('../lib/ldapAdd')

tap.test('Requires options to be specified', function (test) {
  const expectedErrorMessage = 'Missing required input'
  const opts = false
  ldapAdd(opts, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.ldapUrl to be specified', function (test) {
  const opts = {
    ldapUrl: false
  }
  const expectedErrorMessage = 'Missing required input: options.ldapUrl'
  ldapAdd(opts, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.bindDn to be specified', function (test) {
  const opts = {
    ldapUrl: true,
    bindDn: false
  }
  const expectedErrorMessage = 'Missing required input: options.bindDn'
  ldapAdd(opts, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.bindSecret to be specified', function (test) {
  const opts = {
    ldapUrl: true,
    bindDn: true,
    bindSecret: false
  }
  const expectedErrorMessage = 'Missing required input: options.bindSecret'
  ldapAdd(opts, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.user to be specified', function (test) {
  const opts = {
    ldapUrl: true,
    bindDn: true,
    bindSecret: true,
    user: false
  }
  const expectedErrorMessage = 'Missing required input: options.user'
  ldapAdd(opts, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.filter to be specified', function (test) {
  const opts = {
    ldapUrl: true,
    bindDn: true,
    bindSecret: true,
    user: true,
    filter: false
  }
  const expectedErrorMessage = 'Missing required input: options.filter'
  ldapAdd(opts, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.scope to be specified', function (test) {
  const opts = {
    ldapUrl: true,
    bindDn: true,
    bindSecret: true,
    user: true,
    filter: true,
    scope: false
  }
  const expectedErrorMessage = 'Missing required input: options.scope'
  ldapAdd(opts, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.attributes to be specified', function (test) {
  const opts = {
    ldapUrl: true,
    bindDn: true,
    bindSecret: true,
    user: true,
    filter: true,
    scope: true,
    attributes: false
  }
  const expectedErrorMessage = 'Missing required input: options.attributes'
  ldapAdd(opts, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.baseDn to be specified', function (test) {
  const opts = {
    ldapUrl: true,
    bindDn: true,
    bindSecret: true,
    user: true,
    filter: true,
    scope: true,
    attributes: true,
    baseDn: false
  }
  const expectedErrorMessage = 'Missing required input: options.baseDn'
  ldapAdd(opts, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.groupDn to be specified', function (test) {
  const opts = {
    ldapUrl: true,
    bindDn: true,
    bindSecret: true,
    user: true,
    filter: true,
    scope: true,
    attributes: true,
    baseDn: true,
    groupDn: false
  }
  const expectedErrorMessage = 'Missing required input: options.groupDn'
  ldapAdd(opts, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

