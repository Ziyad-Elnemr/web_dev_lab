import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="/" className="navbar-logo">
            Udemy
          </a>
          <div className="navbar-categories">
            <button className="categories-btn">Categories</button>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for anything"
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
        </div>

        <div className="navbar-right">
          <a href="#" className="nav-link">
            Udemy Business
          </a>
          <a href="#" className="nav-link">
            Teach on Udemy
          </a>
          <button className="cart-btn">🛒</button>
          <button className="login-btn">Log in</button>
          <button className="signup-btn">Sign up</button>
          <button className="globe-btn">🌐</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
