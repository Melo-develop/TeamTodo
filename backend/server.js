const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('database.json');
const middlewares = jsonServer.defaults({
  static: './public', // Esto evita el error
  noCors: false
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Habilitar CORS para que Netlify pueda acceder
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

server.use(router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server corriendo en puerto ${PORT}`);
  console.log(`Endpoints disponibles:`);
  console.log(`http://localhost:${PORT}`);
});