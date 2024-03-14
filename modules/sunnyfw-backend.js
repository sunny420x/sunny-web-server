//Importing Required Node.js Modules.
var fs = require('fs')

//Display Welcome Message.
if(show_welcome_message == true) {
    console.log(`---------------------------------------------`)
    console.log(`[+] ${server_name} has been started at :${port}`)

    //Check Logging Status
    if(enable_log == true) {
        console.log(`... [+] Logging is enabled ...`)
        console.log(`... Log file will be saved at ${log_file} ...`)
    } else {
        console.log(`... [-] Logging is disabled ...`)
    }

    console.log(`---------------------------------------------`)
}

function display_log(text) {
    store_text = `[ ${getDate()} ${getTime()} ] ${text}`
    console.log(store_text);
    if(enable_log == true) {
        fs.appendFile('log.txt', store_text+"\n", (err) => {
            if (err) throw err;
        });
    }
}

//File response.
function send_file(path, res) {
    fs.readFile(path, (err, data) => {
        if(err) throw err;
        res.writeHead(200)
        res.write(data)
        return res.end()
    })
}

//HTML response.
class View {
    constructor(path, res) {
        this.path = path
        this.res = res
    }
    render = () => {
        fs.readFile(this.path, (err, data) => {
            if(err) throw err;
            this.res.writeHead(200, {"Content-Type": "text/html"});
            this.res.write(data)
            this.res.end()
        })
    }
}

//JSON response.
class JSON_API {
    constructor(data, res) {
        this.res = res
        this.data = data
    }
    send = () => {
        this.res.writeHead(200, {"Content-Type": "application/json"});
        this.res.write(JSON.stringify(this.data))
        this.res.end()
    }
}

//Time
function getDate() {
    return new Date().toISOString().slice(0,10)
}

function getTime() {
    return new Date().toLocaleString('en-GB', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }).slice(12,20)
}

//Exporting Functions.
module.exports = {
    display_log: display_log,
    View:View,
    JSON_API:JSON_API,
    getDate:getDate,
    getTime:getTime,
    send_file: send_file
}