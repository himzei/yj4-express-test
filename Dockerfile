FROM node:20

WORKDIR /usr/src/app 

COPY package.json ./

RUN npm install 

COPY . .

EXPOSE 4000:80

CMD ["npm", "run", "deploy"]
