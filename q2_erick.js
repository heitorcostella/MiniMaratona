function executar() {
    let valor = document.getElementById("campo").value;
    let texto_limpo = valor.toLowerCase().replace(/\s+/g, '');
    let texto_inverso = texto_limpo.split('').reverse().join('');

    let resultado = (texto_limpo !== "") && (texto_limpo === texto_inverso);

    alert(resultado);
    document.getElementById("saida").innerHTML = resultado;
}