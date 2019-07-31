# E-commerce

This is a module that leveraging the mercadolibre's api allows you to search products currently on sale in the platform and get relevant information from them like description, price, among others.

It has a backend designed with express.js whose responsibility is to reach the mercadolibre's api and return what we want, to enhance the overall performance it does caching with redis and clustering via pm2 module.

## Quick start

``` bash
# Clone the repository
git clone https://github.com/wwleak/ecommerce-meli.git

# Install dependencies for the server
npm install

# Instalar dependencies for the client
npm run client-install

# Run client and server 
npm run dev

# Correr sólo el servidor express
npm run server

# Correr solo el cliente react
npm run client
```

## Notice

Server runs at http://localhost:5000 and the client at http://localhost:3000. If you want it to run in another port change it manually.
