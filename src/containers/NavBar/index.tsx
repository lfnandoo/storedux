const NavBar: React.FC = () => {
  return (
    <nav>
      <h1>
        STO<strong>REDUX</strong>
      </h1>
      <div className="navbar-right-side">
        <div>
          <h3 className="navbar-itens">
            Itens: <strong>0</strong>
          </h3>
        </div>
        <button>Limpar tudo</button>
      </div>
    </nav>
  );
};

export default NavBar;
