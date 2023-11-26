FROM node:lts

WORKDIR /usr/src/app

RUN npm install -g next netlify-cli

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

COPY ./init-app.sh /

RUN chmod +x /init-app.sh

ENTRYPOINT ["sh", "/init-app.sh"]
