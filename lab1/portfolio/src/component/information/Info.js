import './Info.css';

function Info() {
  return (
    <div id="sec1">
  <nav id="main-nav" class="navbar navbar-expand-md">
    <div class="container">
        <div>
            <a href="#home" class="navbar-brand">alaa</a>
            <button class="navbar-toggler" type="button"> 
                <span class="navbar-toggler-icon">
                </span>
            </button>
        </div>
        <div class="collapsen navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#home" class="nav-link">Home</a>
                </li>
                 <li class="nav-item">
                    <a href="#about" class="nav-link">About</a>
                </li>
                 <li class="nav-item">
                    <a href="#services" class="nav-link">Services</a>
                </li>
                 <li class="nav-item">
                    <a href="#portofolio" class="nav-link">Portfolio</a>
                </li>
            </ul>
        </div>
    </div>
  </nav>
  <section id="home">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 custom-col">
                <h1 class="display-3">
                    I am alaa
                </h1>
                <p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore assumenda quaerat sit asperiores voluptatibus id nobis iure ipsum, suscipit accusamus excepturi doloremque in. Atque culpa optio assumenda alias, ex accusantium.</p>
                <div class="d-flex">
                    <a href="#portfolio" class="btn btn-outline-dark mr-3 p-2" id="contact" >Contact Me</a>

                </div>
            </div>
        </div>
    </div>
  </section>
</div>
  );
}

export default Info;
