import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

let port = 3000;
let app = express();
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath:config.output.publicPath
}));

app.get('/users', function(req, res){
  res.json([
    {"id":1, "name":"CLint"},
    {"id":2, "name":"John"},
    {"id":3, "name":"Mike"}
  ]);
});

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if(err ){
    console.log(err); //eslint-disable-line no-console
  }else {
    open('http://localhost:'+port);
  }
})
