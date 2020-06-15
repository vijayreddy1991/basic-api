FROM node:8.16-onbuild

ADD . /home/node/app
WORKDIR /home/node/app

EXPOSE 8888
