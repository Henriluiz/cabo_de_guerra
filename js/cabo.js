function abrirSite(url) {
  window.open(url, '_blank', 'noopener,noreferrer'); // Boas práticas de segurança
}

// Um jogo de Escolha de Time e Disputa no Cabo de Guerra. Cada personagem/jogador terá uma força já pré-definida, ao escolher 3 jogadores, a máquina escolherá outros 3 (Alguns igual ou não) e somará a força dos três integrantes do time e o time que tive a maior força irá ganhar

// Lista de jogadores
const heroisMarvel = {
    "Capitão América": 800,
    "Thor": 1000,
    "Homem de Ferro": 700,
    "Homem Aranha": 750,
    "Hulk": 999,
  };

const viloesMarvel = {
    "Caveira Vermelha": 790,
    "Fantasmas": 720,
    "Chicote Negro": 850,
    "Thanos": 1000,
    "Ultron": 950,
    "Soldado Invernal": 820,
};


// Fazer um append, e faz um if dentro da função para verificar se esse item já está na lista, se tiver vai retirar desmarcar ele
let escolhas_jg = []
function escolha(nome){
  let indice = escolhas_jg.indexOf(nome)
  if (indice !== -1){
    escolhas_jg.splice(escolhas_jg.indexOf(nome), 1);
  }
  else {
    escolhas_jg.push(nome)
  }
  alert(escolhas_jg)
  if (escolhas_jg.length > 2){
    maquina()
  }
}

let escolhas_maquina = []
function maquina(){
  const chaves = Object.keys(viloesMarvel); // Pegando chaves do dicionário js
  
  while (escolhas_maquina.length < 3){
    let sorteio = Math.floor(Math.random() * 5) + 1
    let indice = escolhas_maquina.indexOf(chaves[sorteio]) // Verificando se já existe esse item na lista
    if (indice !== -1){
      escolhas_maquina.splice(escolhas_maquina.indexOf(chaves[sorteio]), 1);
    }
    else {
      escolhas_maquina.push(chaves[sorteio])
    }
  }
  alert(escolhas_maquina)
}

// Calcular a força de cada jogador, e depois somar pra saber a força geral do time

// Calcular a força de cada jogador do time do computador

// Comparar os dois times para saber quem ganhou!