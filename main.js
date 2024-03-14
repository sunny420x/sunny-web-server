const http = require('http')
var url = require('url')

// Setting
port = 8080
log_file = './log.txt'

// Importing module.
var { send_file, View, JSON_API, getDate, getTime } = require('./modules/sunnyfw-backend.js')

//Routing
http.createServer((req, res) => {
    var address = url.parse(req.url, true);
    switch(address.pathname) {
        case "/":
            new View('index.html', res).render()
            break
        case "/pages/home.html":
            send_file('pages/home.html', res)
            break
        case "/pages/about.html":
            send_file('pages/about.html', res)
            break
        case "/api":
            new JSON_API({
                date: getDate(),
                time: getTime(),
                message: "Welcome to test API."
            }, res).send()
            break
        case "/pages/404.html":
            send_file('pages/404.html', res)
            break
        case "/js/sunnyfw-frontend.js":
            send_file('js/sunnyfw-frontend.js', res)
            break
        case "/app.js":
            send_file('app.js', res)
            break
        default:
            new View('index.html', res).render()
            break
    }
}).listen(port)