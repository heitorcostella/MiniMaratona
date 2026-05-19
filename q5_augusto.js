document.querySelector("#botao").addEventListener("click", verificar)

function verificar() {
    const senha = document.querySelector("#senha").value;
    const senhaSplitada = document.querySelector("#senha").value.split("");
    
    const especiais = ["@", "!", "%", "#", "$"];

    let maiuscula = false;
    let numero = false;
    let caracEspec = false;

    senhaSplitada.forEach(carac => {
        if (typeof(carac) == typeof("a") && !especiais.includes(carac) && carac === carac.toUpperCase()) {
            maiuscula = true;
        }
        if (typeof(parseInt(carac)) === typeof(1)) {
            numero = true;
        }
        if (carac == '@' || carac == '!' || carac == "#" || carac == "$" || carac == "%") {
            caracEspec = true;
        }
    })
    if (senha.length < 8 || !maiuscula || !numero || !caracEspec) {
        alert('deu errado');
        console.log(maiuscula, numero, caracEspec);
    } else {
        alert('deu certo');
    }
}
