import "../styles/header.css";
import "../scripts/clock.js";

function Header() {
  return (
    <header>
      <div>
        <h1>Emi Nails</h1>
      </div>
      <div>
        <h1 id="zegar"></h1>
      </div>
    </header>
  );
}

export default Header;
