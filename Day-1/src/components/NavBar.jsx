function NavBar() {
    return (
        <div className="nav">
            <div className="nav-img">
                <img src="/src/assets/brand_logo.png" alt="" />
            </div>
            <nav className="nav-section">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">LOCATION</a>
                <a href="#">CONTACT</a>
            </nav>
            <div className="nav-btn">
                <button>Login</button>
            </div>
        </div>
    );
}

export default NavBar;
