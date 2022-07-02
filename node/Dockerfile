FROM node

RUN apt-get update && apt-get install wait-for-it -y

WORKDIR /usr/src/app/

COPY . .

RUN chmod +x start_server.sh

RUN npm install

EXPOSE 3000
