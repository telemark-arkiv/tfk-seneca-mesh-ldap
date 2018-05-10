###########################################################
#
# Dockerfile for tfk-seneca-mesh-ldap
#
###########################################################

# Setting the base to nodejs 4.6.1
FROM mhart/alpine-node:4.6.1@sha256:7cdb9fe36a9811d3c77c8c643b57b78fc21ac69c1e1ddda93ca785f82617fbbd

# Maintainer
MAINTAINER Jonas Enge

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Extra tools for native dependencies
RUN apk add --no-cache make gcc g++ python

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV TFK_SENECA_MESH_LDAP_TAG tfk-seneca-mesh-ldap                    
ENV TFK_SENECA_MESH_LDAP_HOST localhost
ENV TFK_SENECA_MESH_LDAP_PORT 8000
ENV TFK_SENECA_MESH_LDAP_URL ldap://host.domain.no:389
ENV TFK_SENECA_MESH_LDAP_BIND_DN CN=username,OU=TFK,DC=domain,DC=domain,DC=domain
ENV TFK_SENECA_MESH_LDAP_BIND_SECRET secret
ENV TFK_SENECA_MESH_LDAP_BASE_DN OU=TFK,dc=domain,dc=domain,DC=domain
ENV TFK_SENECA_MESH_LDAP_GROUP_DN CN=groupName,OU=TFK,DC=domain,DC=domain,DC=domain

# Startup
CMD ["node", "service.js", "--seneca-log=type:act"]
