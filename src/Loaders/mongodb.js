require('dotenv').config();
const mongoose = require('mongoose');

async function startDB() {
  await mongoose.connect(
    'mongodb+srv://amandafernandesalves11:amanda369@sitematetest.zhcf2ts.mongodb.net/?retryWrites=true&w=majority',
  );
  console.log('DB conectado.');
}

module.exports = startDB;
