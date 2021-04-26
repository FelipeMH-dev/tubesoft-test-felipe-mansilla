#############################################################
# DockerFile Backend
#############################################################

# Imagen Base
FROM node:14

# Directory app
RUN mkdir -p /usr/src/app

# Move to directory 
WORKDIR /usr/src/app

#Copy package
COPY package*.json ./

#Run command
RUN npm install

COPY . .

EXPOSE 4000

#ENTRYPOINT [ "./entrypoint.sh" ]
CMD ["npm", "run", "dev"]
