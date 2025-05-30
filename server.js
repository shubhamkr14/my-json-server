// const jsonServer = require('json-server')

// const server = jsonServer.create()

// const router = jsonServer.router('db.json')
// const middlewares = jsonServer.defaults()
 
// server.use(middlewares)
// server.use('/api', router)
// server.listen(process.env.PORT || 5000, () => {
//   console.log('JSON Server is running')
// })


const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port);
