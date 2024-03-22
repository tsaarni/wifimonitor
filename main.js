const http = require("http");
const fs = require("fs");
const wifi = require("node-wifi");

wifi.init({
  iface: null,
});

const server = http.createServer((req, res) => {
  if (req.url == "/signal") {
    wifi.getCurrentConnections((error, currentConnections) => {
      if (error) {
        res.writeHead(500);
        return res.end("Error getting WiFi signal strength");
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(currentConnections));
    });
  } else {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end("Error loading index.html");
      }

      res.writeHead(200);
      res.end(data);
    });
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
