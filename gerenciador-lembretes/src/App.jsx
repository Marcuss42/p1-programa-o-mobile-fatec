import React from "react";
import LembreteEntrada from "./LembreteEntrada";
import LembreteLista from "./LembreteLista";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vetorLembretes: []
    };
  }

  adicionarLembrete = (descricao) => {

    this.state.vetorLembretes.push({
      descricao: descricao,
      favorito: false
    });

    console.log(this.state.vetorLembretes);

    this.setState({ vetorLembretes: this.state.vetorLembretes }); 
  }

  excluirLembrete = (index) => {
    const vetor = this.state.vetorLembretes;
    vetor.splice(index, 1);
    this.setState({ vetorLembretes: vetor });
  };

  render() {
    const textoBotao = "Cadastrar Lembrete";

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <LembreteEntrada
              textoBotao={textoBotao}
              funcAdicionar={this.adicionarLembrete}
            />

            <LembreteLista 
              vetorLembretes={this.state.vetorLembretes}
              excluirLembrete={this.excluirLembrete}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
