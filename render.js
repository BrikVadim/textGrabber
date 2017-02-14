const Tesseract = require('tesseract.js')
const fs = require('fs')
const path = require('path')

let filesList  = document.getElementById('filesList')
let relustArea = document.getElementById('result')
let image = null

filesList.onchange = function () {
    image = path.resolve(__dirname, filesList.value)

    Tesseract.recognize(image)
        .then(data => relustArea.innerHTML = data.text)
        .catch(err => alert(err))
}

fs.readdir(__dirname, (err, files) => {
    if (err) {
        return console.error(err)
    }

    files.forEach(file => {
        console.log(file)
        filesList.innerHTML += `<option>${file}</option>`
    })
})
