'use strict'

const Seneca = require('seneca')
const Mesh = require('seneca-mesh')
const envs = process.env
const ldapAdd = require('./lib/ldapAdd')
const config = require('./config')

const options = {
  seneca: {
    tag: envs.TFK_SENECA_MESH_LDAP_TAG || 'tfk-seneca-mesh-ldap'
  },
  mesh: {
    auto: true,
    listen: [
      {pin: 'cmd:add-user-to-group, type:user', model: 'observe'}
    ]
  },
  ldapOptions: config,
  isolated: {
    host: envs.TFK_SENECA_MESH_LDAP_HOST || 'localhost',
    port: envs.TFK_SENECA_MESH_LDAP_PORT || '8000'
  }
}
const Service = Seneca(options.seneca)

if (envs.TFK_SENECA_MESH_LDAP_ISOLATED) {
  Service.listen(options.isolated)
} else {
  Service.use(Mesh, options.mesh)
}

Service.use(ldapAdd, options.ldapOptions)
