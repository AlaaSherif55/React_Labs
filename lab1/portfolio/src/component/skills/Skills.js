import './Skills.css'
import ProgressBarComp from '../../reusableComponent/progressBar/ProgressBar'
import ProgressBar from 'react-bootstrap/ProgressBar';
function renderContent(dataValue, text, now) {
    return (
      <div>
        <p data-value={dataValue}>{text}</p>
        <ProgressBar striped variant="success" now={now} />
      </div>  
    );
}
function Skills() {
  const frontendSkills = [
    { name: "HTML5", value: "80" },
    { name: "CSS3", value: "60" },
    { name: "jQuery", value: "50" }
  ];

  const backendSkills = [
    { name: "Python", value: "75" },
    { name: "PHP", value: "65" },
    { name: "Node.js", value: "35" }
  ];
  return (
    <section id="services" class="bg-light">
      <div>
            <div className="text-center pt-5">
                <h2 className="display-4 pt-5">My services</h2>
            </div>
            <ul>
              <li>
                  <h1>Frontend</h1>
                  {frontendSkills.map((skill, index) => (
                      <ProgressBarComp
                          key={`skill-${index}-front`}
                          contentRender={renderContent}
                          now={"40"}
                          dataValue={skill.value}
                          text={skill.name}
                      />
                  ))}
              </li>
              <li>
                  <h1>Backend</h1>
                  {backendSkills.map((skill, index) => (
                      <ProgressBarComp
                          key={`skill-${index}-back`}
                          contentRender={renderContent}
                          now={"40"}
                          dataValue={skill.value}
                          text={skill.name}
                      />
                  ))}
              </li>
          </ul>
        </div>
        </section>
  );
}

export default Skills;












