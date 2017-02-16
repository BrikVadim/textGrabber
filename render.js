const Tesseract = require('tesseract.js')
const path = require('path')
const fs = require('fs')

let filesList = document.getElementById('filesList')
let relustArea = document.getElementById('result')
let progressBar = document.getElementById('progress')
let image = null

function recognizeImage(image) {
    Tesseract.recognize(image, {
            lang: 'rus'
    })
        .progress(message => progressBar.value = message.progress || 0)
        .then(data => relustArea.innerHTML = data.text)
        .catch(err => alert(err))
}

function fillFilesList(files) {
    clearFileList()
    files.forEach(file => addFileToList(file))
}

function addFileToList(fileName) {
    let fileListItem = document.createElement("option")
    fileListItem.appendChild(document.createTextNode(fileName))

    filesList.appendChild(fileListItem)
}

function clearFileList() {
    filesList.innerHTML = ''
}

filesList.onclick = function () {
    image = path.resolve(__dirname, filesList.value)
    recognizeImage(image)
}

fs.readdir(__dirname, (err, files) => {
    if (err) {
        return console.error(err)
    }
    fillFilesList(files)
})
