FROM node:10

WORKDIR /usr/src/app

#npm install 이 소스 변경에 따라 자동으로 업데이트 되는데 이를 방지하기 위해
COPY package.json ./
RUN npm install
# COPY server.js ./
COPY ./ ./



CMD ["npm", "run", "start"]