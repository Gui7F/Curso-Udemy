function Fomulário() {
    const form = document.querySelector(".Form");
    function recebeEventoForm(evento) {
        evento.preventDefault()
        const nome = form.querySelector(".nome")
        const sobrenome = form.querySelector(".sobrenome")
        const altura = form.querySelector(".altura")
        const peso = form.querySelector(".peso")

        console.log(nome ,sobrenome, peso , altura)
    }

    form.addEventListener('submit', recebeEventoForm)
}

Fomulário()