FROM node:14.4.0-alpine

LABEL maintainer "Tsunemasa Hachiya"

WORKDIR /var/www/app/frontend

RUN npm install --global pm2

COPY ./frontend/package*.json ./

#RUN npm install --production
RUN npm install

COPY ./frontend ./

RUN npm run build

EXPOSE 3000

# USER node

CMD ["pm2-runtime", "start", "npm", "--name", "nextjs", "--", "run", "dev"]
# CMD ["pm2-runtime", "start", "npm", "--name", "nextjs", "--", "run", "start"]
