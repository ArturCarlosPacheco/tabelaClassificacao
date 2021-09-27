var jogador1 = {
    nome: "Jogador 1",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  var jogador2 = {
    nome: "Jogador 2",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  var jogador3 = {
    nome: "Jogador 3",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  
  function calculaPontosJogador(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
  }
  
  jogador1.pontos = calculaPontosJogador(jogador1);
  jogador2.pontos = calculaPontosJogador(jogador2);
  jogador3.pontos = calculaPontosJogador(jogador3);
  
  var jogadores = [jogador1, jogador2, jogador3];
  
  function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
      elemento += "<tr><td>" + jogadores[i].nome + "</td>";
      elemento += "<td>" + jogadores[i].vitorias + "</td>";
      elemento += "<td>" + jogadores[i].empates + "</td>";
      elemento += "<td>" + jogadores[i].derrotas + "</td>";
      elemento += "<td>" + jogadores[i].pontos + "</td>";
      elemento +=
        "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
      elemento +=
        "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
      elemento +=
        "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
      elemento += "<td><button onClick='zerar(" + i + ")'>Zerar</button></td>";
      elemento += "</tr>";
    }
  
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
  }
  
  exibeJogadoresNaTela(jogadores);
  
  function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontosJogador(jogador);
    exibeJogadoresNaTela(jogadores);
  }
  
  function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontosJogador(jogador);
    exibeJogadoresNaTela(jogadores);
  }
  
  function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
  }
  
  function zerar(i) {
    var jogador = jogadores[i];
    jogador.pontos = 0;
    jogador.vitorias = 0;
    jogador.derrotas = 0;
    jogador.empates = 0;
    exibeJogadoresNaTela(jogadores);
  }
  