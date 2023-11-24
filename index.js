const http = require("http");
const fetch = require("node-fetch");

http.createServer(async(req,res) => {
  var p = await fetch("https://pointgo.id").then(x => x.text());
  res.end(p);
}).listen(80);
