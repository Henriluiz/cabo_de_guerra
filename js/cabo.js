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

function recarregarPagina() {
  location.reload(); // Recarrega a página
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
    for (const chave in heroisMarvel) {
        if (!escolhas_jg.includes(chave)) { // Verifica se o membro não está nas chaves do dicionário
          document.getElementById(chave).style.display = 'none';
        }
        else {
          document.getElementById(chave).removeAttribute('onclick'); // Remove o atributo onclick
          document.getElementById("sub_titulo").innerHTML = `<h4>Combate entre Heróis e Vilões Marvel<h4>`;
          document.getElementById("vs").style.display = "block";
        }
      }
      maquina()
    }
  }

let escolhas_maquina = []
async function maquina(){
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
  document.getElementById("viloes").style.display = "flex"
  document.getElementById("viloes").style.justifyContent = "center"
  for (const chave in viloesMarvel) {
    if (escolhas_maquina.includes(chave)) { // Verifica se o membro não está nas chaves do dicionário
      document.getElementById(chave).style.display = 'block';
    }
  }
  await sleep(5000)
  // Limpando para aparece apenas os vencedores
  document.getElementById("viloes").style.display = "none"
  document.getElementById("herois").style.display = "none"
  document.getElementById("vs").style.display = "none";
  calular()
}

// Calcular a força de cada jogador, e depois somar pra saber a força geral do time
function calular(){
  // Calucando a força dos heróis
  let forca_herois = 0
  for (const item of escolhas_jg){
    forca_herois += heroisMarvel[item]
  }

  let forca_viloes = 0
  for (const item of escolhas_maquina){
    forca_viloes += viloesMarvel[item]
  }
}
// Calcular a força de cada jogador do time do computador

// Comparar os dois times para saber quem ganhou!