import "./Content.css";

const Content = () => {
  return (
    <div className="content">
      <div className="situation">
        <h2>Mundo</h2>
        <div className="situationLinks">
          <a href="">the global conversation</a>
          <a href="">spotlight</a>
          <a href="">top stories</a>
          <a href="">today</a>
          <a href="">no coment</a>
          <a href="">witness</a>
          <a href="">mundo 365</a>
        </div>
      </div>
      <div className="headlines">
        <div className="headlineLeft">
          <div className="topNotice">
            <div className="topUp"></div>
            <div className="topDown">
              <h3>Mau tempo continua a causar estragos na europa</h3>
              <p>
                Norte de frança, belgica e dinamarca continuam inundadas por
                causa das tempestades de há duas semanas
              </p>
            </div>
          </div>
        </div>
        <div className="headlineRight">
          <div className="notice">
            <h4>Marcha silenciosa em paris apela á paz no médio oriente</h4>
          </div>
          <div className="notice2">
            <h4>Israel diz que vai investigar ataque a escola de Jabalia</h4>
          </div>
          <div className="notice3">
            <h4>Von der Leyen opõe-se a deslocação forçada de palestinianos</h4>
          </div>
        </div>
      </div>
      <div className="topRated">
        <h1>Mais Vistas</h1>
        <div className="topRatedContent">
          <div className="topRatedOne">
            <div className="TopRatedOneCover"></div>
            <h4>
              Ucránia e Estados Unidos preparam conferéncia da industria militar
            </h4>
          </div>
          <div className="topRatedTwo">
            <div className="TopRatedTwoCover"></div>
            <h4>
              Casa branca acusa Elon Musk de promover "Odio antisemita e
              racista"
            </h4>
          </div>
          <div className="topRatedThree">
            <div className="TopRatedThreeCover"></div>
            <h4>
              França reconhece que gilfosato é nocivo e recompensa agricultores
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
