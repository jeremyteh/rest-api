FROM node:12
WORKDIR /app
COPY package.json /app
RUN npm install --quiet
COPY . /app
CMD node server.js
EXPOSE 5000