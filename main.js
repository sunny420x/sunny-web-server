// Importing module.
const http = require('http')
var url = require('url')

// Setting
server_name = "Sunny Framework"
port = 4444
enable_log = false 
log_file = './log.txt'
show_welcome_message = true

var { send_file, View, JSON_API, Time } = require('./modules/sunnyfw-backend.js')

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
                date: Time.date(),
                time: Time.time(),
                message: "Welcome to test API."
            }, res).send()
            break

        case "/pages/404.html":
            send_file('pages/404.html', res)
            break

        case "/js/sunnyfw-frontend.js":
            send_file('js/sunnyfw-frontend.js', res)
            break

        case "/js/routing.js":
            send_file('js/routing.js', res)
            break

        default:
            new View('index.html', res).render()
            break
    }
}).listen(port)