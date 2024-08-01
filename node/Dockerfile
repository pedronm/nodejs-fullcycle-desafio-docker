FROM node:16.4.2-alpine as build

COPY package.json package-lock.json ./

RUN npm i

FROM node:16.4.2-alpine as runner

WORKDIR /app
ENV SERVER_PORT=3000

COPY --from=build ./node_modules ./node_modules

COPY src/ ./src/
COPY index.js ./

EXPOSE 3000

CMD ["npx", "nodemon", "index.js"]