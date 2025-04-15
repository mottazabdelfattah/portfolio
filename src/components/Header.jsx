// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">
          <Link to="/">Moataz Abdelaal / Portfolio</Link>
        </h1>
        <nav>
          {/* <Link to="/#about" className="nav-link">About</Link> */}
          <Link smooth to="/#about" className="nav-link">About</Link>
          <Link smooth to="/#projects" className="nav-link">Projects</Link>
          <Link smooth to="/#career" className="nav-link">Career</Link>
          <Link smooth to="/#contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
