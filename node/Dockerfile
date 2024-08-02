FROM node:16.4.2-alpine as build

COPY package.json package-lock.json ./

RUN npm i

FROM node:16.4.2-alpine as runner

WORKDIR /app
ENV SERVER_PORT=3000
ENV DOCKERIZE_VERSION v0.7.0

RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

COPY --from=build ./node_modules ./node_modules

COPY src/ ./src/
COPY index.js ./

EXPOSE 3000

