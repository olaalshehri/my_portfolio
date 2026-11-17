function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <p>Hello, I'm Ola Al-Shehri</p>
          <h2>Junior Frontend Developer</h2>

          <p className="hero-desc">
          I build modern, responsive, and user-friendly
          web experiences using React.
        </p>
          <div className="hero-buttons">

          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>

        </div>

      </section>
    </>
  );
}

export default Hero;
