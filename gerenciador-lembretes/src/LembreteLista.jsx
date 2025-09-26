const LembreteLista = (props) => {

  return (
    <div className="container">
      <br />
      <div className="row col-12">
        {
          props.vetorLembretes.length === 0 ? (
            <p className="text-center">Nenhum lembrete cadastrado.</p>
          ) 
            : 
          (
            props.vetorLembretes.map((lembrete, index) => (
              <div className="col-3">
                
                  <div
                    className="btn border w-10"
                    style={{ backgroundColor: lembrete.favorito ? "yellow" : "lightgray" }}
                    onClick={() => props.alternarFavorito(index)}
                    onDoubleClick={() => props.excluirLembrete(index)}>

                    {lembrete.descricao}
                  </div>

                
                <br />
                <br />
                
              </div>
            ))
          )
        }
      </div>
    </div>
  );
};

export default LembreteLista;