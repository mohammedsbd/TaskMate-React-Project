import Logo from "../assets/10001.png"

function Header() {
  return (
    <header>
      <div className="logo">
        <img
          src={Logo}
          alt="Taskmate logo"
        />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span className="light"></span>
        <span className="medium"></span>
        <span className="dark"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="gThree activeTheme"></span>
      </div>
    </header>
  );
}

export default Header
