var root = document.getElementById("root")

function getURL() {
    return window.location.href.split("/");
}

function getPath() {
    return getURL()[3]
}

function getPage(path) {
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
            page = getPage('pages/about');
            break
        default:
            page = getPage('pages/home');
            break
    }
    return page
}

async function RedirectPage(path) {
    return getPage('pages/'+path);
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