import './Portofolio.css';
import Card from 'react-bootstrap/Card';
import CardComp from '../../reusableComponent/card/Card';
import React, { useState } from 'react';

const renderContent = (title, content, index) => {

  const backgroundColor = index % 2 === 0 ? 'lightgrey' : 'darkgrey';

  return (
    <Card style={{ width: '18rem', margin: '1rem 1rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor }}>
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
  const [backgroundColor, setBackgroundColor] = useState('lightgrey');
  const cardData = [
    { title: "Web Development", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus quod in dolor obcaecati deserunt?" },
    { title: "Video Editing", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus quod in dolor obcaecati deserunt?" },
    { title: "Mobile Development", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus quod in dolor obcaecati deserunt?" },
    { title: "Video Editing", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus quod in dolor obcaecati deserunt?" },
    { title: "Mobile Development", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus quod in dolor obcaecati deserunt?" },
    { title: "Mobile Development", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus quod in dolor obcaecati deserunt?" },
    { title: "Web Development", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus quod in dolor obcaecati deserunt?" },
    { title: "Web Development", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus quod in dolor obcaecati deserunt?" }
  ];
 
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
            {cardData.map((card, index) => (
            <CardComp
            key={`port-${index}`}
            renderContent={renderContent}
            title={card.title}
            content={card.content}
            index={index}
           />
           ))}

          </div>
        </div>
      </section>
    </div>
  );
}

export default Portofolio;