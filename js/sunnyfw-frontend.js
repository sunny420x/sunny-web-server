var root = document.getElementById("root")

function getPath() {
    function getURL() {
        return window.location.href.split("/");
    }    
    return getURL()[3]
}

function getFile(path) {
    return new Promise((resolve) => {
        fetch("http://localhost:8080/"+path).then(res => res.text())
        .then((data) => {
            resolve(data)
        })
    })
}

async function displayPage() {
    switch(getPath()){
        case "about":
            page = getFile('pages/about.html');
            break
        default:
            page = getFile('pages/home.html');
            break
    }
    return page
}

async function RedirectPage(path) {
    return getFile('pages/'+path+".html");
}

function getAPIData(path) {
    return new Promise((resolve) => {
        fetch(path).then(res => res.text()).then((data) => {
            resolve(data)
        })
    })
}

function Redirect(path) {
    RedirectPage(path).then((new_page) => {
        root.innerHTML = new_page
        window.history.pushState('', 'Title', '/'+path);
    })
}

displayPage().then((page) => {
    root.innerHTML = page
})