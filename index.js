var express = require('express');
var app = express();
var path = require('path')
var expressStaticGzip = require('express-static-gzip')


app.use('/', expressStaticGzip( path.join(__dirname), {enableBrotli: true}));

// app.get('/', (req,res)=>{
//     res.sendFile("index.html", { root: __dirname })
// })

// app.use(__dirname,  {setHeaders: function(res, path) {
//     res.set("Access-Control-Allow-Origin", "*");
//     res.set("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");
//     res.set("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.set("X-Powered-By",' 3.2.1')
//     res.set("Accept-Encoding", "gzip,deflate,br,wazm")
    
//   }})

app.listen(3000);