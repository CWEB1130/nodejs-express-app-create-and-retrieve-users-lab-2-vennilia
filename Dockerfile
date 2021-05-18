FROM node:14


#creating app directiory
WORKDIR /usr/src/app

#install app dependencies 
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ] 

