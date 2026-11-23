# Operação Nuvem Literária — Deploy com Docker, Docker Hub e Render

Catálogo de livros: React (Vite) + Node.js (Service Pattern) + PostgreSQL.

## Imagens no Docker Hub
- Backend: https://hub.docker.com/r/SEU_USUARIO/books-backend
- Frontend: https://hub.docker.com/r/SEU_USUARIO/books-frontend

## URLs no Render
- Frontend: https://SEU-FRONTEND.onrender.com
- API: https://SEU-BACKEND.onrender.com/api/books

## Maior desafio técnico
(Escreva aqui um parágrafo com a sua experiência real. Sugestão de ponto de partida: o Vite
só lê VITE_API_URL em tempo de build, então uma variável definida no Render não alteraria
uma imagem já publicada; resolvi gerando um config.js em runtime pelo entrypoint do Nginx.
Também precisei adaptar a conexão do backend para DATABASE_URL e para a porta PORT do Render.)
