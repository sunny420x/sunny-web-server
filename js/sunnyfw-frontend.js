var root = document.getElementById("root")

function getPath() {
    function getURL() {
        return window.location.href.split("/");
    }    
    return getURL()[3]
}

function getFile(path) {
    return new Promise((resolve) => {
        fetch(path).then(res => res.text())
        .then((data) => {
            resolve(data)
        })
    })
}

async function displayPage() {
    switch(getPath()){
        case "":
            page = getFile('pages/home.html');
            break
        case "home":
            page = getFile('pages/home.html');
            break
        case "about":
            page = getFile('pages/about.html');
            break
        default:
            page = getFile('pages/404.html');
            break
    }
    return page
}

function Redirect(path) {
    async function RedirectPage(path) {
        return getFile('pages/'+path+".html");
    }
    RedirectPage(path).then((new_page) => {
        root.innerHTML = new_page
        window.history.pushState('', 'Title', '/'+path);
    })
}

displayPage().then((page) => {
    root.innerHTML = page
})