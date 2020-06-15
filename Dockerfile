FROM node:lts-stretch-slim

ADD . /home/node/app
WORKDIR /home/node/app
CMD npm start
EXPOSE 8888
