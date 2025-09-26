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
            props.vetorLembretes.map((lembrete) => (
              <div className="col-3">
                
                  <div
                    className="btn border w-10"
                    style={{ backgroundColor: lembrete.favorito ? "yellow" : "lightgray" }}
                  >
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