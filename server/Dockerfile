FROM node:16.18.0

WORKDIR /server

COPY package*.json /server

RUN npm i

COPY . /server

CMD ["npm", "run", "dev"]
