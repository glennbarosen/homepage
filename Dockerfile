FROM node:20-alpine

WORKDIR /app

# Update npm to avoid "Exit handler never called" bug
RUN npm install -g npm@latest

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
