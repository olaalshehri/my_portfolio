function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-title">مرحباً، أنا علا الشهري</p>
          <h1>مطورة واجهات ويب </h1>

          <p className="hero-desc">
            شغوفة بتطوير الويب وتصميم واجهات تفاعلية وسهلة الاستخدام، والعمل على
            تطوير تطبيقات الويب.
          </p>

          <div className="hero-buttons">
            <a href="#projects" id="projects" className="btn btn-primary">
              أعمالي
            </a>

            <a href="#contact" id="contact" className="btn btn-secondary">
              تواصل معي
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
