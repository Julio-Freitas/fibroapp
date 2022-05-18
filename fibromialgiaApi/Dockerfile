FROM node:latest
WORKDIR /fibromialgia
ENV port=9090
COPY package.json .
RUN npm install -g npm@8.10.0
RUN npm install

COPY . .

CMD npm run dev

RUN npx sequelize db:migrate:undo:all && npx sequelize db:migrate && npx sequelize db:sedd:all

EXPOSE $PORT
