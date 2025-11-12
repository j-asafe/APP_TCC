import axios from "axios";

// ⚠️ Troque o IP abaixo pelo seu IP local (veja no ipconfig: Endereço IPv4)
const API_URL = "http://192.168.1.109:4000"; // Exemplo da sua API rodando na porta 4000

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
