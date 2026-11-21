function Projects() {
  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="section-title">
          أعمالي
        </h2>
        <p className="projects-description">
          بعض المشاريع التي اشتغلت عليها
        </p>

        <div className="projects-grid">
          {/* Mahfel Project */}
          <div className="project-card">
            <div className="project-image">Project Image</div>

            <div className="project-info">
              <h3 className="project-title">محفل</h3>
              <p className="project-description">
                An event and conference platform.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>
              <a
                href="YOUR_GITHUB_LINK"
                className="btn-github"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Restaurant Project */}
          <div className="project-card">
            <div className="project-image">Project Image</div>

            <div className="project-info">
              <h3 className="project-title">Restaurant</h3>
              <p className="project-description">Restaurant website project.</p>

              <div className="project-tech">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>
              <a
                href="YOUR_GITHUB_LINK"
                className="btn-github"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
