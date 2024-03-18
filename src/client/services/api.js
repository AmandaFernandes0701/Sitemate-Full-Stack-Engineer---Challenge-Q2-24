const axios = require('axios');

const BASE_URL = `${process.env.BACKEND_URL || 'http://localhost:8000'}`;
const api = axios.create({
  baseURL: BASE_URL,
});

module.exports = api;
