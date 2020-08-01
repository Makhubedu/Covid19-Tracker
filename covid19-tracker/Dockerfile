FROM node:12.16.1

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN npm install

RUN npm install @material-ui/core

COPY . .

EXPOSE 3000

CMD ["npm","start"]