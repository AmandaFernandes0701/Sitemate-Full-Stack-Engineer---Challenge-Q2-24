const app = require('./App');
const Loaders = require('./Loaders/index');

Loaders.start();

app.listen(process.env.PORT, () => console.log('Server is running!✨🐺'));
