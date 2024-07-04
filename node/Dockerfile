FROM node:16.4.2-alpine3.14

RUN apk update && apk upgrade
RUN apk add wget

RUN wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz
RUN tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.6.1.tar.gz
RUN rm dockerize-linux-amd64-v0.6.1.tar.gz  

EXPOSE 3000

CMD [ "node", "index.js" ]
