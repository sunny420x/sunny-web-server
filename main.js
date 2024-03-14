const http = require('http')
var url = require('url')

// Setting
port = 8080
log_file = './log.txt'

// Importing module.
var { render_page, send_file, View, JSON_API, getDate, getTime } = require('./modules/sunnyfw-backend.js')

//Routing
http.createServer((req, res) => {
    var address = url.parse(req.url, true);
    switch(address.pathname) {
        case "/":
            new View('index.html', res).render()
            break
        case "/pages/home":
            send_file('pages/home.html', res)
            break
        case "/pages/about":
            send_file('pages/about.html', res)
            break
        case "/api":
            new JSON_API({
                date: getDate(),
                time: getTime(),
                message: "Welcome to test API."
            }, res).send()
            break
        case "/js/sunnyfw-frontend.js":
            send_file('js/sunnyfw-frontend.js', res)
            break
        default:
            new View('index.html', res).render()
            break
    }

}).listen(port)