FROM node:20

WORKDIR /usr/app 
COPY ./ /usr/app

RUN sudo npm install 

CMD ["npm", "run", "deploy"]
EXPOSE 4000