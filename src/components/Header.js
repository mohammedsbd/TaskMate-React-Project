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
    </header>
  );
}

export default Header
