const Tesseract = require('tesseract.js')
const image = require('path').resolve(__dirname, process.argv[2])

Tesseract.recognize(image)
    .then    ( data   => console.log(data.text))
    .catch   ( err    => console.error(err))
    .finally ( ()     => process.exit())
