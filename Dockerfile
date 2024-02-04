FROM node:20

WORKDIR /app 

COPY package.json ./

RUN sudo npm install 

COPY . .

CMD ["npm", "run", "deploy"]
EXPOSE 4000