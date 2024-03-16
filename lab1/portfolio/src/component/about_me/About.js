import './About.css';
import image from '../../images/photo1683568938.jpeg'
function About() {
  return (
    <div id="sec2">
    <section id="about" class="bg-ligth">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 spacing">
                    <img src={image} alt="" class=":img-fluid img-hero"/>
                </div>
                <div class="col-lg-6">
                    <h2 class="display-4">Hi, I am alaa</h2>
                    <p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore assumenda quaerat sit asperiores voluptatibus id nobis iure ipsum, suscipit accusamus excepturi doloremque in. Atque culpa optio assumenda alias, ex accusantium.</p>
                    <p class="lead" id="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore assumenda quaerat sit asperiores voluptatibus id nobis iure ipsum, suscipit accusamus excepturi doloremque in. Atque culpa optio assumenda alias, ex accusantium.</p>
                    <a href="#" class="btn btn-dark p-2" >Read more</a>
                </div>
            </div>
        </div>
    </section>
</div>
  );
}

export default About;

