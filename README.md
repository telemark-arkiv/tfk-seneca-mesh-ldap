# tfk-seneca-mesh-ldap

Adds user to group in LDAP

## Usage

Clone the git repo

```sh
$ git clone
```

Change the [config](config/index.js) to match your environment.

```javascript
{
  ldapUrl: process.env.TFK_SENECA_MESH_LDAP_URL || 'ldap://hostname:389',
  bindDn: process.env.TFK_SENECA_MESH_LDAP_BIND_DN || 'CN=thisuser,OU=TFK,DC=my,DC=domain,DC=no',
  bindSecret: process.env.TFK_SENECA_MESH_LDAP_BIND_SECRET || 'secret',
  filter: process.env.TFK_SENECA_MESH_LDAP_FILTER || '(sAMAccountName={{username}})',
  scope: process.env.TFK_SENECA_MESH_LDAP_SCOPE || 'sub',
  attributes: process.env.TFK_SENECA_MESH_LDAP_ATTRIBUTES || ['dn', 'sn', 'cn'],
  baseDn: process.env.TFK_SENECA_MESH_LDAP_BASE_DN || 'OU=TFK,dc=my,dc=domain,DC=no',
  groupDn: process.env.TFK_SENECA_MESH_LDAP_GROUP_DN || 'CN=groupName,OU=TFK,DC=my,DC=domain,DC=no'
}

```

## License
[MIT](LICENSE)

