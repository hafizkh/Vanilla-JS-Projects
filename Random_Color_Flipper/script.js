const page = document.body
const btn = document.getElementById('color')


function randomColorGen() {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    const rgb = `rgb(${red},${green},${blue})`
    page.style.backgroundColor = rgb
    btn.innerHTML = rgb
    
}

