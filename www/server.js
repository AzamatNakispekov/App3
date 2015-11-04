var fs = require("fs")

var http = require("http")

 

http.Server(function(request, response){

    fs.readFile(request.url.replace(/\//, ""), "utf8", function(err, data){

      if(err) return console.log(err)

      response.write(data)

      response.end()

    })

}).listen(8888)