import React from "react";

class LembreteEntrada extends React.Component {

  state = {
    descricao: ""
  };

  handleClick = () => {
    const { descricao } = this.state;
    if (!descricao.trim()) return;
    this.props.funcAdicionar(descricao);
    this.setState({ descricao: "" });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-6">
            <input
              type="text"
              value={this.state.descricao}
              onChange={(e) => this.setState({ descricao: e.target.value })}
              placeholder="Digite o lembrete"
              className="form-control mb-2"
            />
            <button
              className="btn btn-outline-primary w-100"
              onClick={this.handleClick}
            >
              {this.props.textoBotao}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LembreteEntrada;
