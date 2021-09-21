import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class home extends Component {
    render() {

        return (
           <div>
  <div className="container-fluid bg-primary py-3">
  <link href="%PUBLIC_URL%/css/style.css" rel="stylesheet"/>
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
          
        </div>
        <div className="col-md-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <a className="text-white px-3" href>
              <i className="fab fa-facebook-f" />
            </a>
            <a className="text-white px-3" href>
              <i className="fab fa-twitter" />
            </a>
            <a className="text-white px-3" href>
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="text-white px-3" href>
              <i className="fab fa-instagram" />
            </a>
            <a className="text-white pl-3" href>
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid position-relative nav-bar p-0">
    <div className="container-lg position-relative p-0 px-lg-3" style={{zIndex: 9}}>
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 pl-3 pl-lg-5">
        <a href className="navbar-brand">
          <h1 className="m-0 text-secondary"><span className="text-primary">Sky</span> Laundry</h1>
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
          <div className="navbar-nav ml-auto py-0">
          <Link to="/">
            <a href="index.html" className="nav-item nav-link active">Home</a>
            </Link>
            <Link to="/about">
            <a href="about.html" className="nav-item nav-link">About</a>
            </Link>
            <Link to="/services">
            <a href="service.html" className="nav-item nav-link">Services</a>
            </Link>
            
            <Link to="/contact">
            <a href="contact.html" className="nav-item nav-link">Contact</a>
            </Link>
            <Link to="/login">
            <a href="contact.html" className="nav-item nav-link">Login</a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  </div>
  {/* Navbar End */}
  {/* Carousel Start */}
  <div className="container-fluid p-0">
    <div id="header-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: 900}}>
              <h4 className="text-white text-uppercase mb-md-3">Laundry &amp; Dry Cleaning</h4>
              <h1 className="display-3 text-white mb-md-4">Best For Laundry Services</h1>
              {/* <a href className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a> */}
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: 900}}>
              <h4 className="text-white text-uppercase mb-md-3">Laundry &amp; Dry Cleaning</h4>
              <h1 className="display-3 text-white mb-md-4">Highly Professional Staff</h1>
              <a href className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
        <div className="btn btn-secondary" style={{width: 45, height: 45}}>
          <span className="carousel-control-prev-icon mb-n2" />
        </div>
      </a>
      <a className="carousel-control-next" href="#header-carousel" data-slide="next">
        <div className="btn btn-secondary" style={{width: 45, height: 45}}>
          <span className="carousel-control-next-icon mb-n2" />
        </div>
      </a>
    </div>
  </div>
  {/* Carousel End */}
  {/* Contact Info Start */}
  <div className="container-fluid contact-info mt-5 mb-4">
    <div className="container" style={{padding: '0 30px'}}>
      <div className="row">
        <div className="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0" style={{height: 100}}>
          <div className="d-inline-flex">
            <i className="fa fa-2x fa-map-marker-alt text-white m-0 mr-3" />
            <div className="d-flex flex-column">
              <h5 className="text-white font-weight-medium">Our Location</h5>
              <p className="m-0 text-white">123 Street, New York, USA</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center bg-primary mb-4 mb-lg-0" style={{height: 100}}>
          <div className="d-inline-flex text-left">
            <i className="fa fa-2x fa-envelope text-white m-0 mr-3" />
            <div className="d-flex flex-column">
              <h5 className="text-white font-weight-medium">Email Us</h5>
              <p className="m-0 text-white">info@example.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0" style={{height: 100}}>
          <div className="d-inline-flex text-left">
            <i className="fa fa-2x fa-phone-alt text-white m-0 mr-3" />
            <div className="d-flex flex-column">
              <h5 className="text-white font-weight-medium">Call Us</h5>
              <p className="m-0 text-white">+012 345 6789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact Info End */}
  {/* About Start */}
  <div className="container-fluid py-5">
    <div className="container pt-0 pt-lg-4">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <img className="img-fluid" src="img/about.jpg" alt />
        </div>
        <div className="col-lg-7 mt-5 mt-lg-0 pl-lg-5">
          <h6 className="text-secondary text-uppercase font-weight-medium mb-3">Learn About Us</h6>
          <h1 className="mb-4">Wash, Fold and Dry Clean
</h1>
          
          <p className="mb-2">
         Sky Laundry is an online laundry cleaning services company. We are offering Wash, Iron, Fold and Dry Cleaning services. We provide an affordable and convenient way of getting your laundry done in the right way.
          </p>
          <div className="row">
            <div className="col-sm-6 pt-3">
              <div className="d-flex align-items-center">
                <i className="fa fa-check text-primary mr-2" />
                <p className="text-secondary font-weight-medium m-0">Quality Laundry Service</p>
              </div>
            </div>
            <div className="col-sm-6 pt-3">
              <div className="d-flex align-items-center">
                <i className="fa fa-check text-primary mr-2" />
                <p className="text-secondary font-weight-medium m-0">Express Fast Delivery</p>
              </div>
            </div>
            <div className="col-sm-6 pt-3">
              <div className="d-flex align-items-center">
                <i className="fa fa-check text-primary mr-2" />
                <p className="text-secondary font-weight-medium m-0">Highly Professional Staff</p>
              </div>
            </div>
            <div className="col-sm-6 pt-3">
              <div className="d-flex align-items-center">
                <i className="fa fa-check text-primary mr-2" />
                <p className="text-secondary font-weight-medium m-0">100% Satisfaction Gguarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Services Start */}
  <div className="container-fluid pt-5 pb-3">
    <div className="container">
      <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">Our Services</h6>
      <h1 className="display-4 text-center mb-5">What We Offer</h1>
      <div className="row">
        <div className="col-lg-3 col-md-6 pb-1">
          <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{height: 300}}>
            <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{width: 100, height: 100}}>
              <i className="fa fa-3x fa-cloud-sun text-secondary" />
            </div>
            <h4 className="font-weight-bold m-0">Dry Cleaning</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 pb-1">
          <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{height: 300}}>
            <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{width: 100, height: 100}}>
              <i className="fas fa-3x fa-soap text-secondary" />
            </div>
            <h4 className="font-weight-bold m-0">Wash &amp; Laundry</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 pb-1">
          <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{height: 300}}>
            <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{width: 100, height: 100}}>
              <i className="fa fa-3x fa-burn text-secondary" />
            </div>
            <h4 className="font-weight-bold m-0">Curtain Laundry</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 pb-1">
          <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{height: 300}}>
            <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{width: 100, height: 100}}>
              <i className="fa fa-3x fa-tshirt text-secondary" />
            </div>
            <h4 className="font-weight-bold m-0">Suits Cleaning</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Services End */}
  {/* Features Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 m-0 my-lg-5 pt-0 pt-lg-5 pr-lg-5">
          <h6 className="text-secondary text-uppercase font-weight-medium mb-3">Our Features</h6>
          <h1 className="mb-4">Why Choose Us</h1>
          <p>
          Sky Laundry is an On-Demand Laundry and Dry-Cleaning service company. We provide an affordable and convenient way of getting your laundry done right at your finger-tips. We offer the best online laundry service in Lahore and help you get rid of those extra pile of dirty clothes and deliver you fresh clothes.
          </p>
          <div className="row">
            <div className="col-sm-6 mb-4">
              <h1 className="text-secondary" data-toggle="counter-up">10</h1>
              <h5 className="font-weight-bold">Years Expereince</h5>
            </div>
            <div className="col-sm-6 mb-4">
              <h1 className="text-secondary" data-toggle="counter-up">250</h1>
              <h5 className="font-weight-bold">Expert Worker</h5>
            </div>
            <div className="col-sm-6 mb-4">
              <h1 className="text-secondary" data-toggle="counter-up">1250</h1>
              <h5 className="font-weight-bold">Happy Clients</h5>
            </div>
            <div className="col-sm-6 mb-4">
              <h1 className="text-secondary" data-toggle="counter-up">9550</h1>
              <h5 className="font-weight-bold">Dry Cleaning</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="d-flex flex-column align-items-center justify-content-center bg-secondary h-100 py-5 px-3">
            <i className="fa fa-5x fa-certificate text-white mb-5" />
            <h1 className="display-1 text-white mb-3">10+</h1>
            <h1 className="text-white m-0">Years Experience</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features End */}
  {/* Working Process Start */}
  <div className="container-fluid pt-5">
    <div className="container">
      <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">Working Process</h6>
      <h1 className="display-4 text-center mb-5">How We Work</h1>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
            <div className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4" style={{width: 150, height: 150, borderWidth: '15px !important'}}>
              <h2 className="display-2 text-secondary m-0">1</h2>
            </div>
            <h3 className="font-weight-bold m-0 mt-2">Order Place</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
            <div className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4" style={{width: 150, height: 150, borderWidth: '15px !important'}}>
              <h2 className="display-2 text-secondary m-0">2</h2>
            </div>
            <h3 className="font-weight-bold m-0 mt-2">Free Pick Up</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
            <div className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4" style={{width: 150, height: 150, borderWidth: '15px !important'}}>
              <h2 className="display-2 text-secondary m-0">3</h2>
            </div>
            <h3 className="font-weight-bold m-0 mt-2">Dry Cleaning</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
            <div className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4" style={{width: 150, height: 150, borderWidth: '15px !important'}}>
              <h2 className="display-2 text-secondary m-0">4</h2>
            </div>
            <h3 className="font-weight-bold m-0 mt-2">Free Delivery</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Working Process End */}
  {/* Pricing Plan Start */}

  {/* Pricing Plan End */}
  {/* Testimonial Start */}
 
  {/* Testimonial End */}
  {/* Blog Start */}
  
  {/* Blog End */}
  {/* Footer Start */}
  <div className="container-fluid bg-primary text-white mt-5 pt-5 px-sm-3 px-md-5">
    <div className="row pt-5">
      <div className="col-lg-3 col-md-6 mb-5">
        <a href><h1 className="text-secondary mb-3"><span className="text-white">Sky Laundry</span></h1></a>
        <p>
        One of the main reasons why you should consider hiring our services for all your laundry needs is the fact that we have experience.
        </p>
        <div className="d-flex justify-content-start mt-4">
          <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: 38, height: 38}} href="#"><i className="fab fa-twitter" /></a>
          <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: 38, height: 38}} href="#"><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: 38, height: 38}} href="#"><i className="fab fa-linkedin-in" /></a>
          <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: 38, height: 38}} href="#"><i className="fab fa-instagram" /></a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="text-white mb-4">Get In Touch</h4>
        <p>Dolor clita stet nonumy clita diam vero, et et ipsum diam labore</p>
        <p><i className="fa fa-map-marker-alt mr-2" />123 Street, New York, USA</p>
        <p><i className="fa fa-phone-alt mr-2" />+012 345 67890</p>
        <p><i className="fa fa-envelope mr-2" />info@example.com</p>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="text-white mb-4">Quick Links</h4>
        <div className="d-flex flex-column justify-content-start">
          <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2" />Home</a>
          <a className="text-white mb-2" href="/about"><i className="fa fa-angle-right mr-2" />About Us</a>
          <a className="text-white mb-2" href="/services"><i className="fa fa-angle-right mr-2" />Services</a>

          <a className="text-white" href="/contact"><i className="fa fa-angle-right mr-2" />Contact Us</a>
        </div>
      </div>
      {/* <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="text-white mb-4">Newsletter</h4>
        <form action>
          <div className="form-group">
            <input type="text" className="form-control border-0" placeholder="Your Name" required="required" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control border-0" placeholder="Your Email" required="required" />
          </div>
          <div>
            <button className="btn btn-lg btn-secondary btn-block border-0" type="submit">Submit Now</button>
          </div>
        </form>
      </div> */}
    </div>
  </div>
  <div className="container-fluid bg-dark text-white py-4 px-sm-3 px-md-5">
    <p className="m-0 text-center text-white">
    Copyrights  © <a className="text-white font-weight-medium" href="#">Sky Laundry</a>. All Rights Reserved. 
    </p>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
</div>

        )
    }
}
