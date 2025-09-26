import React from "react";
import LembreteEntrada from "./LembreteEntrada";
import LembreteLista from "./LembreteLista";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vetorLembretes: [],
      filtro: "todos"
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

  alternarFavorito = (index) => {
    const vetor = this.state.vetorLembretes;
    vetor[index].favorito = !vetor[index].favorito;
    this.setState({ vetorLembretes: vetor });
  };

  excluirLembrete = (index) => {
    const vetor = this.state.vetorLembretes;
    vetor.splice(index, 1);
    this.setState({ vetorLembretes: vetor });
  };

  filtrarFavoritos = () => {
    if (this.state.filtro === "favoritos")
      this.setState({ filtro: "todos" });
    else
      this.setState({ filtro: "favoritos" });
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

            <button
              className="btn"
              onClick={this.filtrarFavoritos}
              style={{
                backgroundColor: this.state.filtro === "favoritos" ? "yellow" : "lightgray",
              }}>
              {this.state.filtro === "favoritos" ? "Mostrar Todos" : "Mostrar Favoritos"}  
              
            </button>


            <LembreteLista 
              vetorLembretes={this.state.vetorLembretes}
              alternarFavorito={this.alternarFavorito}
              excluirLembrete={this.excluirLembrete}
              filtro= {this.state.filtro === "favoritos" ? "favoritos" : "todos" }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
