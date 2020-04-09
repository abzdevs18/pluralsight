import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

let port = 3000;
let app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
  res.json([
    {"id":55187488,"firstName":"Oran","lastName":"Wolf","email":"Haleigh.Stanton38@hotmail.com"},
    {"id":55187488,"firstName":"Oran","lastName":"Wolf","email":"Haleigh.Stanton38@hotmail.com"},
    {"id":55187488,"firstName":"Oran","lastName":"Wolf","email":"Haleigh.Stanton38@hotmail.com"}
  ]);
});

app.listen(port, function(err){
  if(err ){
    console.log(err); //eslint-disable-line no-console
  }else {
    open('http://localhost:'+port);
  }
});
