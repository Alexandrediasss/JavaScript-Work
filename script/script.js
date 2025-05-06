const btTema = document.getElementById("mudarTema")
let tema = false

btTema.addEventListener("click", function () {
    const mudarPai = document.getElementById("pai")
    const mudarH1 = document.getElementById("titulo")
    const mudarCss = document.getElementById("habilitarCss")

    if (tema === false) {
        mudarPai.style.backgroundColor = "#FCDC00"
        mudarH1.style.color = "black"

        btTema.style.backgroundColor = "#FCDC00"
        btTema.style.color = "black"
        btTema.style.borderColor = "black"

        mudarCss.style.backgroundColor = "black"
        mudarCss.style.color = "#FCDC00"

    } else {
        mudarPai.style.backgroundColor = ""
        mudarH1.style.color = ""

        btTema.style.backgroundColor = ""
        btTema.style.color = ""
        btTema.style.borderColor = ""

        mudarCss.style.backgroundColor = ""
        mudarCss.style.color = ""
    }
    tema = !tema
})

const aprovHabilit = document.getElementById("habilitarCss")
let habilit = false

function desabilitarCSS() {
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"], style')

    stylesheets.forEach(sheet => {
        sheet.disabled = !sheet.disabled
    })

    document.body.classList.toggle("no-css")

    if(habilit === false){
        aprovHabilit.textContent = "Habilitar CSS"
        habilit = true
    } else {
        aprovHabilit.textContent = "Desabilitar CSS"
        habilit = false
    }
}

const mainImg = document.getElementById("main-img")
let rotation = 0

mainImg.addEventListener("click", function() {
    rotation += 45
    mainImg.style.transform = `rotate(${rotation}deg)`
})