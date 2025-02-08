alert('Jogo do numero secreto');
let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let tentativa;
let palpites = 1;

while (tentativa != numeroSecreto) {
    tentativa = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    // tentativa for igual numero secreto
    if (numeroSecreto == tentativa) {
        break;
    } else {
        if (numeroSecreto > tentativa) {
            alert(`o numero secreto é maior que ${tentativa}`);
        } else {
            alert(`o numero secreto e menor que ${tentativa}`);
        }
        // palpites = palpites + 1;
        palpites++
    }
}

let palavraPalpite = palpites > 1 ? 'palpites' : 'palpite';
alert(`Boa, você acertou o numero secreto ${numeroSecreto} com ${palpites} ${palavraPalpite}`);
//if (palpites > 1) {
//  alert(`Boa, você acertou o numero secreto ${numeroSecreto} com ${palpites} palpites`);
//} else {
//    alert(`Boa, você acertou o numero secreto ${numeroSecreto} com ${palpites} palpite`);
//}