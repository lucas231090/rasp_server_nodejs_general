//yarn dev ou npm run dev

const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.json({message: 'olar'})
})

app.listen(3000, ()=> console.log('Server started at http://localhost:3000'))