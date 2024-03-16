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
  return (
    <section id="services" class="bg-light">
      <div>
            <div className="text-center pt-5">
                <h2 className="display-4 pt-5">My services</h2>
            </div>
            <ul>
                <li>
                    <h1>Frontend</h1>
                    <ProgressBarComp contentRender={renderContent} now={"40"} dataValue={"80"} text={"HTML5"}></ProgressBarComp>
                    <ProgressBarComp contentRender={renderContent} now={"40"} dataValue={"60"} text={"CSS3"}> </ProgressBarComp>
                    <ProgressBarComp contentRender={renderContent} now={"40"} dataValue={"50"} text={"jQuery"}> </ProgressBarComp>
                </li>
                <li>
                    <h1>Backend</h1>
                    <ProgressBarComp contentRender={renderContent} now={"40"} dataValue={"75"} text={"Python"}></ProgressBarComp>
                    <ProgressBarComp contentRender={renderContent} now={"40"} dataValue={"65"} text={"PHP"}> </ProgressBarComp>
                    <ProgressBarComp contentRender={renderContent} now={"40"} dataValue={"35"} text={"Node.js"}> </ProgressBarComp>
                </li>
            </ul>
        </div>
        </section>
  );
}

export default Skills;












