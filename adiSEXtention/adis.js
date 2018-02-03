console.log('adiSEXtention activated')

let adisImg = [
    "img/adis1.png",
    "img/adis2.png",
    "img/adis3.png",
    "img/adis4.png",
    "img/adis5.png",
    "img/adis6.png",
    "img/adis7.png"
]

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        let imgChanged = 0
        let bilete = document.getElementsByTagName('img')
        for (bild of bilete) {
            console.log('.src: ' + bild.src)
            console.log('.width: ' + bild.width)
            console.log('.height: ' + bild.height)
            //console.log('.naturalWidth: ' + bild.naturalWidth)
            //console.log('.naturalHeight: ' + bild.naturalHeight)
            let w = bild.width || bild.naturalWidth
            let h = bild.height || bild.naturalHeight

            let index = Math.floor(Math.random() * adisImg.length)
            let selImg = adisImg[index]
            let imgURL = chrome.extension.getURL(selImg)
            bild.src = imgURL
            //bild.width = w
            //bild.heigh = h
            bild.style='width:' + w + 'px; height:' + h + 'px;'
            imgChanged ++
        }
        console.log(imgChanged)
    }
)
