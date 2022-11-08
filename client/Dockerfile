FROM node:16.18.0

WORKDIR /client

COPY package*.json /client

RUN npm i

COPY . /client

RUN npm run build

CMD ["npm", "run", "start"]
