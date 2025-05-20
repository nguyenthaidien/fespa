FROM node:alpine3.21 as build

WORKDIR /app
RUN pwd
RUN ls ./
COPY ./dcms/ /app/
RUN ls /app/

RUN npm install -g @angular/cli
RUN npm install

#CMD ["ng", "serve", "--configuration=production", "--host", "0.0.0.0", "--port", "80"]
CMD ["ng", "serve", "--configuration=production", "--host", "0.0.0.0", "--port", "443"]
