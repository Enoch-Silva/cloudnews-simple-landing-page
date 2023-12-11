import "./Header.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navTop">
        <div className="navTop1">
          <img src="./src/assets/svg/language.svg" />
          <a>Portugués</a>
        </div>
        <div className="rightActions">
          <div className="actions1">
            <img src="src/assets/svg/magnifying-glass.svg" />
            <a href="">Procurar</a>
          </div>
          <div className="actions2">
            <img src="src/assets/svg/envelope.svg" />
            <a href="">Newsletter</a>
          </div>
          <div className="actions3">
            <img src="src/assets/svg/circle-user.svg" />
            <a href="">Iniciar Sessão</a>
          </div>
        </div>
      </div>
      <div className="navMiddle">
        <h1>cloud</h1>
        <h2>news.</h2>
      </div>
      <div className="navBottom">
        <div className="bottomOne">
          <a href="">My Europe</a>
          <a href="">Mundo</a>
          <a href="">Desporto</a>
          <a href="">Buisness</a>
          <a href="">Green</a>
          <a href="">Mais</a>
        </div>
        <div className="bottomTwo">
          <img src="src/assets/svg/list-ul.svg" />
          <a href="">Programas</a>
          <img src="src/assets/svg/cloud-sun.svg" />
          <img src="src/assets/svg/bx-stopwatch.svg" />
          <img src="src/assets/svg/collection-play.svg" />
          <img src="src/assets/svg/play-btn-fill.svg" />
          <a href="">
            <h5>Direto</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
