import "../styles/nav.css";

function Navigation() {
  return (
    <nav>
      <img src="/images/logo.png" alt="" />
      <ul>
        <li>
          <a href="#cennik">Cennik</a>
        </li>
        <li>
          <a href="#kontakt">Kontakt</a>
        </li>
        <li>
          <a href="#oMnie">O mnie</a>
        </li>
        <li>
          <a href="#galeria">Galeria</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
