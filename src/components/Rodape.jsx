import "./Rodape.css";

const Rodape = () => {
  return (
    <div className="rodape">
      <div className="rodTop">
        <form action="" className="searchForm">
          <input type="text" placeholder="Pesquisar" />
          <button>
            <img id="search" src="src/assets/svg/searchIcon.svg" />
          </button>
        </form>
        <div className="see">
          <img src="src/assets/svg/bx-purchase-tag.svg" />
          <h3>Procure pelas tags do dia</h3>
        </div>
        <div className="tags">
          <div className="tagsOne">
            <a href="">Israel</a>
            <a href="">Guerra na Ucránia</a>
            <a href="">Russia</a>
            <a href="">França</a>
          </div>
          <div className="tagsTwo">
            <a href="">Hamas</a>
            <a href="">Gaza</a>
            <a href="">Mundo</a>
            <a href="">Portugal</a>
          </div>
        </div>
      </div>
      <div className="rodMiddle">
        <div className="rodLogo">
          <h1>cloud</h1>
          <h2>news.</h2>
        </div>
        <div className="rodInfo">
          <p>937 583 104</p>
          <p>cloudstrike.com</p>
          <p>enochsilva69@outlook.com</p>
          <p>Rua de Mormogão, Rangel - Luanda</p>
        </div>
      </div>
      <div className="rodBottom">
        <p>CLOUDSTRIKE Technologies Inc.</p>
        <p>Enoch Silva © 2023 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Rodape;
