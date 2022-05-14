FROM node:latest
WORKDIR /fibromialgia
ENV port=9090
COPY package.json .
RUN npm install
COPY . .
CMD npm run dev
EXPOSE $PORT