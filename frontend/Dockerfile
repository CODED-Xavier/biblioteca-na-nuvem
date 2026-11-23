# ---- Etapa 1: build do React/Vite ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- Etapa 2: Nginx servindo o build ----
FROM nginx:1.27-alpine

# O Render define PORT (padrão 10000). O Nginx faz envsubst neste template na inicialização.
ENV PORT=10000
COPY docker/default.conf.template /etc/nginx/templates/default.conf.template

# Gera /config.js com VITE_API_URL em RUNTIME (Vite só lê variáveis em build-time)
COPY docker/40-env-config.sh /docker-entrypoint.d/40-env-config.sh
RUN chmod +x /docker-entrypoint.d/40-env-config.sh

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 10000
