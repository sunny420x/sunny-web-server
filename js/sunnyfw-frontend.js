'use strict';
class page {
    getPath() {
        function getURL() {
            return window.location.href.split("/");
        }    
        return getURL()[3]
    }
    
    getFile(path) {
        return new Promise((resolve) => {
            fetch(path).then(res => res.text())
            .then((data) => {
                resolve(data)
            })
        })
    }
    
    render(path, file) {
        return new Promise((resolve) => {
            if(this.getPath() == path) {
                resolve(this.getFile(file))
            }
        })
    }
}

function Redirect(path) {
    async function RedirectPage(path) {
        return page.getFile('pages/'+path+".html");
    }
    RedirectPage(path).then((new_page) => {
        root.innerHTML = new_page
        window.history.pushState('', 'Title', '/'+path);
    })
}

page = new page