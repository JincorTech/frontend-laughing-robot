FROM mhart/alpine-node:8.6

RUN mkdir -p /usr/src/app
RUN npm i -g pm2@2.7.1

ADD . /usr/src/app
WORKDIR /usr/src/app
RUN cp -r .env.prod .env && yarn && yarn prod:build
EXPOSE 3000
CMD yarn prod:start:docker