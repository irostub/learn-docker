FROM node:16 as builder

WORKDIR /usr/src/app

COPY ./03-docker-react-app/package.json ./
RUN npm install
COPY ./03-docker-react-app/ ./

CMD [ "npm", "run", "build" ]

FROM nginx
EXPOSE 80
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

#test