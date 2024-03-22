# Simple wifi signal strength monitor

![wifi signal strength monitor](demo.png)

To run this project, you need to have [node.js](https://nodejs.org/) installed on your machine.
Download it from the official website or install using your Linux distribution package manager.

Next install the javascript dependencies and then finally run the project.

```bash
npm install
node main.js
```

The server will start on port 3000.
It will serve `index.html` on the root path and the signal strength on the `/signal` endpoint.
The web page will update every seconds and display the latest signal strength.

The REST API will return the signal strength in JSON format.

```bash
$ http http://localhost:3000/signal
HTTP/1.1 200 OK
Connection: keep-alive
Content-Type: application/json
Date: Fri, 22 Mar 2024 19:43:02 GMT
Keep-Alive: timeout=5
Transfer-Encoding: chunked

[
    {
        "channel": "36,80",
        "frequency": 5180,
        "quality": 68,
        "security": "wpa2-psk",
        "security_flags": [],
        "signal_level": -66,
        "ssid": "gmwifi"
    }
]
```

Wifi signal is queried using [`node-wifi`](https://www.npmjs.com/package/node-wifi) package.
The gauge is created using [`justgage`](https://toorshia.github.io/justgage/) package.
