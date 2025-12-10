const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('database.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// ⚠️ CORS - DEBE ESTAR AQUÍ
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  
  next();
});

server.use(router); // ← DESPUÉS DEL CORS

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server corriendo en puerto ${PORT}`);
});