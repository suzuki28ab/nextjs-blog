FROM node:15.2.1-alpine3.12
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g eslint
