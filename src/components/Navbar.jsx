function Navbar() {
  return (
    <>
      <section className="navbar">
        <div className="navbar-logo">
          <a href="#home" className="logo">
            ع
          </a>
        </div>

        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="language-btn">AR</button>
      </section>
    </>
  );
}

export default Navbar;
