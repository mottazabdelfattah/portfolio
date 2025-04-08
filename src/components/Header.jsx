import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">
          <Link to="/">Your Name / Portfolio</Link>
        </h1>
        <nav>
          <Link to="/#about" className="nav-link">About</Link>
          <Link to="/#projects" className="nav-link">Projects</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
