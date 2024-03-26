FROM node:18
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN apt-get update && apt-get install -y

COPY . .

RUN npm install

EXPOSE 3001

CMD ["npm", "run", "start:dev"]