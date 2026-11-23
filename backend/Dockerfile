FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY src ./src

ENV NODE_ENV=production
# O Render injeta PORT (padrão 10000); o server.js já lê process.env.PORT
EXPOSE 10000
USER node
CMD ["node", "src/server.js"]
