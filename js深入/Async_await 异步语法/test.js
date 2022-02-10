let fetch = new Promise(resolve => {
    setTimeout(() => {
        resolve('12121')
        console.log('Promise')
    }, 3000)
})

async function getTitle(url) {
    let response = await fetch(url)
    let html = await response.text()
    return html.match(/<title>([\s\S]+)<\/title>/i)[1]
}

getTitle('https://tc39.github.io/ecma262/').then((res) => console.log(res))