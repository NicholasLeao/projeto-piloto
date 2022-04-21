import "../styles/Card.css"

function CardGrande() {
  return (
    <div className="container1">
      
      <div className="cardGrande">
        <h2>TITULO DO ANUNCIO</h2>
        

        {/* TAGS */}
        <ul className="divBtn1">
          <li>
            <button id="btn1">TAG</button>
          </li>
          <li>
            <button>TAG</button>
          </li>
          <li>
            <button id="btn3">TAG</button>
          </li>
        </ul>

        <img src="https://www.portalimprensa.com.br/content_file_storage/2021/06/24/impresso.PNG" alt="#" />
        {/* ==== */}
      </div>


      <div className="descricao">
        <h3>BREVE DESCRICAO</h3>
        <p>
          CORPO DO POST. CORPO DO POST.CORPO DO POST.CORPO DO POST.CORPO DO
          POST.CORPO DO POST.CORPO DO POST.CORPO DO POST.CORPO DO POST.CORPO DO
          POST.CORPO DO POST.CORPO DO POST.CORPO DO POST.
        </p>
      </div>
    </div>
  );
}

export default CardGrande;
