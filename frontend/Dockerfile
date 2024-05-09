FROM node:18-alpine

WORKDIR /synaptix

COPY ./src /synaptix/src

COPY ./public /synaptix/public

COPY ./package-lock.json /synaptix/package-lock.json

COPY ./package.json /synaptix/package.json

COPY ./craco.config.js /synaptix/craco.config.js

RUN npm install

CMD ["npm", "start"]
