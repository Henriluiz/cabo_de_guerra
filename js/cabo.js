function abrirSite(url) {
  window.open(url, '_blank', 'noopener,noreferrer'); // Boas práticas de segurança
}

// Um jogo de Escolha de Time e Disputa no Cabo de Guerra. Cada personagem/jogador terá uma força já pré-definida, ao escolher 3 jogadores, a máquina escolherá outros 3 (Alguns igual ou não) e somará a força dos três integrantes do time e o time que tive a maior força irá ganhar

// Lista de jogadores
const heroisMarvel = {
  "Homem Aranha": 840,
  "Capitão América": 820,
  "Homem de Ferro": 890,
  "Hulk": 990,
  "Thor": 1000,
  "Pantera Negra": 860,
  "Jessica Jones": 780,
  "Gavião Arqueiro": 730,
  "Homem Formiga": 830,
  "Falcão": 750,
  "Vespa": 770,
  "Cavaleiro da Lua": 800,
  "Visão": 910,
  "Ms. Marvel": 810,
  "Demolidor": 790
};

const viloesMarvel = {
  "Caveira Vermelha": 810,
  "Chicote Negro": 780,
  "Fantasma": 780,
  "Soldado Invernal": 820,
  "Thanos": 1000,
  "Ultron": 940,
  "Duende Verde": 860,
  "Rei do Crime": 790,
  "Mysterio": 770,
  "Killmonger": 830,
  "Magneto": 970,
  "Abominável": 910,
  "Madame da Hidra": 750
};
function recarregarPagina() {
  location.reload(); // Recarrega a página
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function inicia(){
  function getRandomCharacters(dict, count = 5) {
    const keys = Object.keys(dict);
    
    // Se houver menos itens do que o pedido, retorna todos
    if (keys.length <= count) return keys;
  
    const selected = new Set();
  
    while (selected.size < count) {
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      selected.add(randomKey); // Set garante que não repete
    }
  
    return Array.from(selected);
  }
  
  const randomHeroes = getRandomCharacters(heroisMarvel)
  console.log(randomHeroes)
  document.getElementById("inicial").style.display = "none"
  document.getElementById("sub_titulo").style.display = "block"
  document.getElementById("herois").style.display = "flex"
  for (let i = 0; i < randomHeroes.length; i++) {
    const name = randomHeroes[i];
    document.getElementById(name).style.display = "block"
  }
}
// Fazer um append, e faz um if dentro da função para verificar se esse item já está na lista, se tiver vai retirar desmarcar ele
let escolhas_jg = []
function escolha(nome){
  let indice = escolhas_jg.indexOf(nome)
  if (indice !== -1){
    escolhas_jg.splice(indice, 1);
  }
  else {
    escolhas_jg.push(nome)
  }
  if (escolhas_jg.length === 3){
    for (const chave in heroisMarvel) {
        if (!escolhas_jg.includes(chave)) { // Verifica se o membro não está nas chaves do dicionário
          document.getElementById(chave).style.display = 'none';
        } else {
          document.getElementById(chave).removeAttribute('onclick'); // Remove o atributo onclick
          document.getElementById("sub_titulo").innerHTML = `<h4>Combate entre Heróis e Vilões Marvel</h4>`;
          document.getElementById("vs").style.display = "block";
        }
      }
      maquina();
    }
}

let escolhas_maquina = []
async function maquina(){
  const chaves = Object.keys(viloesMarvel); // Pegando chaves do dicionário js
  
  while (escolhas_maquina.length < 3){
    let sorteio = Math.floor(Math.random() * 12) + 1
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
async function calular(){
  // Calucando a força dos heróis
  let forca_herois = 0
  for (const item of escolhas_jg){
    forca_herois += heroisMarvel[item]
  }

  let forca_viloes = 0
  for (const item of escolhas_maquina){
    forca_viloes += viloesMarvel[item]
  }
  if (forca_herois == forca_viloes){
    document.getElementById("sub_titulo").innerHTML = `<h4>Todos perderam! empate</h4>`;
  } else if (forca_herois > forca_viloes){
    document.getElementById("sub_titulo").innerHTML = `<style>h4 {
    font-size: 1.5rem;
    color: #CFC089;
    }</style><h4>O TIME VENCEDOR É:</h4>`;
    document.getElementById("herois").style.display = "flex"
  } else {
    document.getElementById("sub_titulo").innerHTML = `<style>h4 {
    font-size: 1.5rem;
    color: red;
    }</style><h4>O TIME VENCEDOR É:</h4>`;
    document.getElementById("viloes").style.display = "flex"
  }
  console.log("Heróis: "+ forca_herois+ "/ Vilões: "+ forca_viloes)
  await sleep(10000)
  recarregarPagina()
}
// Calcular a força de cada jogador do time do computador

// Comparar os dois times para saber quem ganhou!