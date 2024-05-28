import { Link } from "react-router-dom";

import Logo from "../../images/logo.png";

const Header = () => {
  return (
    <>
    <div >
          <Link to="/" >
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    
    </>
  );
};

export default Header;
