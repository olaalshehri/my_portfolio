function Navbar() {
  return (
    <>
      <section className="navbar">
        <div className="logo">
          <a href="#home" id="home" className="logo">
            ع
          </a>
        </div>

        <div className="navbar-links">
          <a href="#home" id="home">الرئيسية</a>
          <a href="#about" id="about">عنّي</a>
          <a href="#skills" id="skills">التقنيات</a>
          <a href="#projects" id="projects">أعمالي</a>
          <a href="#contact" id="contact">تواصل معي</a>
        </div>

        <button className="language-btn">EN</button>
      </section>
    </>
  );
}

export default Navbar;
