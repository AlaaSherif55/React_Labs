import './Portofolio.css';
import Card from 'react-bootstrap/Card';
import CardComp from '../../reusableComponent/card/Card';

const renderContent = (title, content) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem 1rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function Portofolio() {
  return (
    <div id="sec3">
      <section id="portofolio" class="bg-light">
        <div class="container">
          <div class="text-center pt-5">
            <h2 class="display-4 pt-5">My portofolio</h2>
            <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus quod in dolor obcaecati deserunt?</p>
            <div class="block"></div>
          </div>
          <div class="row">
            <CardComp
              renderContent={renderContent}
              title={"Web Development"}
              content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus quod in dolor obcaecati deserunt?"}
            ></CardComp>

            <CardComp
              renderContent={renderContent}
              title={"Video Editin"}
              content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus quod in dolor obcaecati deserunt?"}
            ></CardComp>

            <CardComp
              renderContent={renderContent}
              title={"Mobile Development"}
              content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus quod in dolor obcaecati deserunt?"}
            ></CardComp>
            

            <CardComp
              renderContent={renderContent}
              title={"Web Development"}
              content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus quod in dolor obcaecati deserunt?"}
            ></CardComp>

            <CardComp
              renderContent={renderContent}
              title={"Video Editin"}
              content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus quod in dolor obcaecati deserunt?"}
            ></CardComp>

            <CardComp
              renderContent={renderContent}
              title={"Mobile Development"}
              content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus quod in dolor obcaecati deserunt?"}
            ></CardComp>
            {/* Add more CardComp components here */}

          </div>
        </div>
      </section>
    </div>
  );
}

export default Portofolio;