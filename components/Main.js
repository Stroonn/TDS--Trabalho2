import React from 'react';
import '../css/main.css'

function Main() {
  return (
    <main className="main">
      <div className="biblioteca">
        <h4>Lista de jogos</h4>
        <form className="jogos">
          <button type="button" className="btn btn-success" id="addjogo">Adicionar jogo</button>
        </form>
      </div>
      
      <div className="container-fluid" id="recentes">
        <div className="pesquisa">
          <h4>Jogados recentemente</h4>
          <form id="barrapesquisa">
            <input id="buscarJogo" type="text" name="q" placeholder="Pesquisar..." />
          </form>
        </div>
        <div className="col-3" id="lista"></div>
      </div>

      <div className="trofeus">
        <h4>Troféus</h4>
        <div className="trofeu">
          {trophies.map((trophy, index) => (
            <div className="conquista" key={index}>
              <img src={require(`../components/images/${trophy.img1}`)} className="trof" alt="Trofeo" />
              <img src={require(`../components/images/${trophy.img2}`)} className="trof" alt="Trofeo" />
              <strong>{trophy.name}</strong>
              {trophy.percentage}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const trophies = [
  { img1: 'platina.png', img2: 'coletetodosostrofeus.png', name: 'Colete todos os troféus', percentage: '0,3%' },
  { img1: 'ouro.png', img2: 'limpezaprofunda.png', name: 'Limpeza profunda', percentage: '17,14%' },
  { img1: 'prata.png', img2: 'achaveparafugir.png', name: 'A chave para fugir', percentage: '9%' },
  { img1: 'cobre.png', img2: 'FugaAgonizante.png', name: 'Fuga Agonizante', percentage: '30,66%' },
  { img1: 'cobre.png', img2: 'BackdoorScape.png', name: 'Backdoor Scape', percentage: '30,4%' },
  { img1: 'cobre.png', img2: 'Eutenhoastuascostas.png', name: 'Eu tenho as tuas costas', percentage: '23,5%' },
  { img1: 'cobre.png', img2: 'Ninguemficouparatras.png', name: 'Ninguem ficou para trás', percentage: '37,8%' },
  { img1: 'cobre.png', img2: 'Nervosdeaço.png', name: 'Nervos de aço', percentage: '28,19%' },
  { img1: 'cobre.png', img2: 'Fugaperfeita.png', name: 'Fuga perfeita', percentage: '23,0%' },
  { img1: 'cobre.png', img2: 'Acorda.png', name: 'Acorda', percentage: '37,8%' },
];

export default Main;
