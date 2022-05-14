FROM node:latest
WORKDIR /fibromialgia-app
ENV port=3001
COPY package.json .
RUN npm install
COPY . .
CMD npm start
EXPOSE $PORT