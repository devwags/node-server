const http = require('node:http');

const server = http.createServer((request, response) => {
  let url = request.url.split('/');
  switch(url[1]) {
    case '':
      if (request.method === 'GET'){
        response.end('Hello, Galvanize!');
      }
      break;
    case 'authors':
      if (request.method === 'GET'){
        response.end('Author is Devon Wagstaff.')
      }
      break;
    default:
      console.log(url);
  }
});

server.listen(3000, 'localhost', ()=>{
  console.log(`Server is running on localhost:3000`);
})