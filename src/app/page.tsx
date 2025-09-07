import "./page.css";
import Card from "./components/Card/Card";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Image from "next/image";

const myDegrees = [
  {
    college: "Northeastern University",
    degree:
      "Bachelor of Science in Computer Science with Systems Concentration",
    graduation: new Date("2027-06-01"),
  },
  {
    college: "Northeastern University",
    degree: "Master of Science in Computer Science ",
    graduation: new Date("2028-06-01"),
  },
];

export default function Home() {
  return (
    <div className="page-layout">
      <div className="content-column">
        <main className="content-container">
          <div className="intro-section">
            <div className="intro-header">
              <div className="intro-photo-container">
                <Image
                  src={'/assets/photo.png'}
                  alt={"Kinsey Bellerose"}
                  className={"intro-photo"}
                  width={100}
                  height={100}
                />
              </div>
              <div className="intro-greeting">
                {"Hi, I'm "}<span className="intro-name">Kinsey Bellerose</span>
              </div>
            </div>
            <div className="intro-description">
              Software Developer and Computer Science
              <br />
              Student at Northeastern University
            </div>
          </div>
          <div className="transparent-divider" />

          <div className="layout-grid">
            <div className="experiences-row">
              <div className="section-title">Experiences</div>
              <div className="cards-container">
                <Card
                  title="Northeastern Electric Racing"
                  subtitle="Tech Lead and Software Developer"
                  dates="November 2024 - Present"
                  description="Full-stack developer for a project management dashboard and tech lead for rules dashboard"
                  githubUrl="https://github.com/Northeastern-Electric-Racing/FinishLine"
                  tags={["TypeScript", "Prisma", "React"]}
                  logoUrl="ner.png"
                  logoAlt="NER logo"
                />
              </div>
            </div>
            <div className="projects-row">
              <div className="section-title">Projects</div>
              <div className="cards-container">
                <Card
                  title="Network Port Scanner"
                  subtitle="Cybersecurity Tool"
                  dates="June 2025 - August 2025"
                  githubUrl="https://github.com/cielbellerose/qt-port-scanner"
                  imageUrl="portScanner.png"
                  imageAlt="project GUI example"
                  tags={["Python", "PySide6"]}
                />
                <Card
                  title="Survival of Petalorn"
                  subtitle="FPS Unity Project"
                  dates="June 2024 - August 2024"
                  githubUrl="https://github.com/cielbellerose/Petalorn"
                  imageUrl="petalorn.png"
                  imageAlt="petalorn cover image"
                  tags={["Unity", "C#"]}
                />
              </div>
            </div>
            <div className="skills-column">
              <div className="skills-container">
                <div className="skills-title">Programming Languages</div>
                <Skills tags={["TypeScript", "Java", "Python", "C++", "CSS"]} />
                <div className="skills-title">Frontend</div>
                <Skills tags={["React", "Next.js"]} />
                <div className="skills-title">Backend</div>
                <Skills tags={["Node.js", "Express.js", "Prisma", "PostgreSQL"]} />
                <div className="skills-title">Developer Tools</div>
                <Skills tags={["Vercel", "Git", "Postman"]} />
                <div className="skills-title">Certifications</div>
                <Skills
                  tags={[
                    {
                      name: "SANS GFACT",
                      url: "https://www.credly.com/badges/b5fee5c8-38dd-4b37-b15c-bde945fc083b",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="transparent-divider" />
          <div className="education-section">
            <Education degrees={myDegrees} />
          </div>
        </main>
      </div>
    </div>
  );
}
