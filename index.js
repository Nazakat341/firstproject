  const http = require('http');
  const path = require('path');
  const fs = require('fs');


  const Server = http.createServer((req,res) =>{
   //console.log(req.url);
  //  fs.readFile(
  //    path.join(__dirname,'public','index.html'),
  //    (err,content)=>{
  //     if(err) throw err;
  //     res.writeHead(200, {'Content-type':'text/html'});
  //     res.end(content); 
  //    }
  //    );

  
  //   if(req.url==='/api/users'){
  //     const users=[
  //       {name:'Nazakat', age:20 },
  //       {name:'Ahmad', age:21}
  //     ];
  //     res.writeHead(200, {'Content-type':'application/json'});
  //     res.end(JSON.stringify(users));
 
  //  }



  /////////Build file path/////////////////////////////////
   let filePath = path.join(
     __dirname,
     'public',
     req.url === '/' ? 'index.html' : req.url
   );
      // console.log(filePath);
      // res.end();


      /////Extension of file
       let extname = path.extname(filePath);

/////////////Initial content type
 let contentType = 'text/html';

 ///////////Check ext and set content type
 switch(extname){
   case '.js':
     contentType= 'text/javascript';
     break;
     case '.css':
     contentType= 'text/css';
     break;
     case '.json':
     contentType= 'application/json';
     break;
     case '.png':
     contentType= 'image/png';
     break;
     case '.jpg':
     contentType= 'image/jpg';
     break;
}
  /////Read file////
  fs.readFile(filePath,(err, content) =>{
    if(err){
      if(err.code == 'ENOENT'){
        //Page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'),
        (err,content)=>{
          res.writeHead(200, {'Content-type':'text/html'});
          res.end(content,'utf8');
         
        }
        )
      }
      else{
        // Some server error
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      }
    }
    else{
      //success
      res.writeHead(200, {'Content-type': contentType});
          res.end(content,'utf8');
    }
  })

  
  });
   
  const PORT = process.env.PORT || 5000;
  Server.listen(PORT,() => console.log(`Server running on port ${PORT}`));

// const person = require('./person');
// console.log(person);
  // const Person=require('./person');

  // const person1=new Person('Nazakat',20);
  // person1.greetings();
  //const Logger = require('./logger');

  // const logger = new Logger();

  // logger.on('message',data => console.log('called listener',data))
  // logger.log('Hello world!');
  // logger.log('Hey');
  // logger.log('Hello');