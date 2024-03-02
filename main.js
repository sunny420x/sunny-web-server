const http = require('http')
var url = require('url')

// Setting
port = 8080
log_file = './log.txt'

// Importing module.
var { render_page, View, JSON_API, getDate, getTime } = require('./modules/sunny_webserver.js')

//Routing
http.createServer((req, res) => {
    var address = url.parse(req.url, true);
    switch(address.pathname) {
        case "/":
            new View('index.html', res).render()
            break
        case "/about":
            new View('about.html', res).render()
            break
        case "/api":
            new JSON_API({
                date: getDate(),
                time: getTime(),
                message: "Welcome to test API."
            }, res).send()
            break
        default:
            render_page('404.html', res)
            break
    }

}).listen(port)