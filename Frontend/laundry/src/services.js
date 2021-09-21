import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class services extends Component {
    render() {
        return (
           <div>
  <div className="container-fluid bg-primary py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center">
            <a className="text-white pr-3" href>FAQs</a>
            <span className="text-white">|</span>
            <a className="text-white px-3" href>Help</a>
            <span className="text-white">|</span>
            <a className="text-white pl-3" href>Support</a>
          </div>
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
            <a href="index.html" className="nav-item nav-link ">Home</a>
            </Link>
            <Link to="/about">
            <a href="about.html" className="nav-item nav-link">About</a>
            </Link>
            <Link to="/services">
            <a href="service.html"  className="nav-item nav-link active">Services</a>
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
  {/* Page Header Start */}
  <div className="page-header container-fluid bg-secondary pt-2 pt-lg-5 pb-2 mb-5">
    <div className="container py-5">
      <div className="row align-items-center py-4">
        <div className="col-md-6 text-center text-md-left">
          <h1 className="mb-4 mb-md-0 text-white">Our Services</h1>
        </div>
        <div className="col-md-6 text-center text-md-right">
          <div className="d-inline-flex align-items-center">
            <a className="btn text-white" href>Home</a>
            <i className="fas fa-angle-right text-white" />
            <a className="btn text-white disabled" href>Services</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Page Header Start */}
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
  {/* Testimonial Start */}

  {/* Testimonial End */}
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
</div>

        )
    }
}
