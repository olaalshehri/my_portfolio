
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPhp,
  SiReact,
  SiReactrouter,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma
} from "@icons-pack/react-simple-icons";

function MySkills() {
  return (
    <section className="skills">
      <h2 className="section-title">التقنيات</h2>
      <p className="skills-description">
        التقنيات والأدوات التي أستخدمها لبناء مشاريعي.
      </p>

      <div className="skills-container">

        {/* Frontend */}
        <div className="skills-card">
          <h3>Frontend</h3>

          <div className="skills-list">

            <div className="skill-item">
              <SiHtml5 size={35} color="default" />
              <span>HTML5</span>
            </div>

            <div className="skill-item">
              <SiCss size={35} color="default" />
              <span>CSS3</span>
            </div>

            <div className="skill-item">
              <SiJavascript size={35} color="default" />
              <span>JavaScript</span>
            </div>

            <div className="skill-item">
              <SiReact size={35} color="default" />
              <span>React</span>
            </div>

            <div className="skill-item">
              <SiReactrouter size={35} color="default" />
              <span>React Router</span>
            </div>

          </div>
        </div>

        {/* Backend & Database */}
        <div className="skills-card">
          <h3>Backend & Database</h3>

          <div className="skills-list">

            <div className="skill-item">
              <SiPhp size={35} color="default" />
              <span>PHP</span>
            </div>

            <div className="skill-item">
              <SiMysql size={35} color="default" />
              <span>MySQL</span>
            </div>

          </div>
        </div>

        {/* Tools */}
        <div className="skills-card">
          <h3>Tools</h3>

          <div className="skills-list">

            <div className="skill-item">
              <SiFigma size={35} color="default" />
              <span>Figma</span>
            </div>

            <div className="skill-item">
              <SiPostman size={35} color="default" />
              <span>Postman</span>
            </div>

            <div className="skill-item">
              <SiGit size={35} color="default" />
              <span>Git</span>
            </div>

            <div className="skill-item">
              <SiGithub size={35} color="default" />
              <span>GitHub</span>
            </div>

            <div className="skill-item">
              <span className="skill-text-icon">XAMPP</span>
            </div>

            <div className="skill-item">
              <span className="skill-text-icon">VS Code</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default MySkills;
