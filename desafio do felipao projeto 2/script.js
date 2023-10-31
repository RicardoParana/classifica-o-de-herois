
function calcularClassificacao(vitorias, derrotas) {
  var saldoDeVitorias = vitorias - derrotas;
  var classificacao;

  if (vitorias <= 10) {
    classificacao = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    classificacao = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    classificacao = "prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    classificacao = "ouro"; 
  }  else if (vitorias >= 81 && vitorias <= 90) {
  classificacao = "diamante";
} else if (vitorias >= 91 && vitorias <= 100) {
  classificacao = "lendário"; 
  } else if (vitorias >= 101) {
    classificacao = "imortal"; 
  }

  return classificacao;
}

// Exemplo de uso da função
var vitorias =81;
var derrotas = 5;
var classificacaoDoJogador = calcularClassificacao(vitorias, derrotas);
console.log("A classificação do jogador é: " + classificacaoDoJogador);
