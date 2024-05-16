var root = document.getElementById("root")
// Routing.
page.render("", "pages/home.html").then((page) => {
    root.innerHTML = page
})

page.render("home", "pages/home.html").then((page) => {
    root.innerHTML = page
})

page.render("about", "pages/about.html").then((page) => {
    root.innerHTML = page
})

//Custom Functions.
async function get_test_api_data() {
    if(page.getPath() == 'home') {
        page.getFile('/api').then((data) => {
        data = JSON.parse(data)
            document.getElementById('testapi').innerHTML = `
            Time: ${data.time}<br>
            Date: ${data.date}`
        })
    }
}