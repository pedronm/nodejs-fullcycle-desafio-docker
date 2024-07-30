FROM node:16.4.2-alpine

ENV SERVER_PORT 3000

WORKDIR /app

COPY . .
RUN npm ci --prod 

EXPOSE 3000

CMD [ "node", "index.js" ]
