#
# React redux APP Dockerfile
#
#

# Pull base image.
FROM node:4.2.4

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /var/www/app && cp -a /tmp/node_modules /var/www/app

# Bundle app source for deployment
COPY . /var/www/app

WORKDIR /var/www/app


CMD npm start
