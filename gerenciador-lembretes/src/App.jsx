import React from "react";
import LembreteEntrada from "./LembreteEntrada";
import LembreteLista from "./LembreteLista";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vetorLembretes: [
        {
          descricao: "Estudar React",
          favorito: true
        },
        {
          descricao: "Ir ao supermercado",
          favorito: false
        },
        {
          descricao: "Lavar o carro",
          favorito: true
        },
        {
          descricao: "Ler um livro",
          favorito: false
        }
      ]
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
              vetorLembretes={this.state.vetorLembretes}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
