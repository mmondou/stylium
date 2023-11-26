FROM node:lts

WORKDIR /usr/src/app

RUN npm install -g next

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000

COPY ./init-app.sh /

RUN chmod +x /init-app.sh

ENTRYPOINT ["sh", "/init-app.sh"]
