async function get_test_api_data() {
    if(getPath() == 'home') {
        getFile('/api').then((data) => {
        data = JSON.parse(data)
            document.getElementById('testapi').innerHTML = `
            Time: ${data.time}<br>
            Date: ${data.date}`
        })
    }
}