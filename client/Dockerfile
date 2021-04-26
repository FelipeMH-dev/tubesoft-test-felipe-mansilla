#############################################################
# DockerFile  Client
#############################################################

# Imagen Base
FROM node:10-alpine as build-step

# Directory app
RUN mkdir -p /usr/src/client

# To handle 'not get uid/gid'
#RUN npm config set unsafe-perm true

# http server
#RUN npm install -g http-server

# Move to directory 
WORKDIR /usr/src/client
# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/client/node_modules/.bin:$PATH
#Copy package
COPY package*.json ./

#Run command
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
#RUN npm run build
#ENTRYPOINT [ "./entrypoint.sh" ]
#CMD [ "http-server", "build" ]
#FROM nginx:1.17.1-alpine
#COPY --from=build-step /usr/src/client/build /usr/share/nginx/html
