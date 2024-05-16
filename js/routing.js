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