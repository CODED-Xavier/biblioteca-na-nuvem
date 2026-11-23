import axios from 'axios';

// Prioridade: config.js (gerado em runtime no container) > build-time > localhost (dev)
const baseURL =
  (window.__ENV__ && window.__ENV__.VITE_API_URL) ||
  import.meta.env.VITE_API_URL ||
  'http://localhost:3001/api';

const api = axios.create({ baseURL });

export const bookService = {
  async getAll() {
    const response = await api.get('/books');
    return response.data;
  },

  async getById(id) {
    const response = await api.get(`/books/${id}`);
    return response.data;
  },

  async create(bookData) {
    const response = await api.post('/books', bookData);
    return response.data;
  },

  async update(id, bookData) {
    const response = await api.put(`/books/${id}`, bookData);
    return response.data;
  },

  async remove(id) {
    await api.delete(`/books/${id}`);
  },
};
