import React from "react";
import LembreteEntrada from "./LembreteEntrada";

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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
