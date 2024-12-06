var body = document.querySelector("body")
var btnDarkmode = document.querySelector("#darkMode")

/* const body = document.querySelector("body") */


btnDarkmode.addEventListener("click",darkMode)

function darkMode() {
    body.classList.toggle("darkMode")

    console.log(btnDarkmode.innerHTML)
    if (btnDarkmode.textContent == "Ativar") {
        btnDarkmode.textContent = "Desativar"
    }
    else {
        btnDarkmode.textContent = "Ativar"
    }
}


