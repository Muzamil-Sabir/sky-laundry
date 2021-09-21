import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';
import { ReactSession } from 'react-client-session';
export default class contact extends Component {


  constructor(props)
  {
    super(props);
    this.addFormData = this.addFormData.bind(this);
    
  }
  addFormData(evt)
  {
    evt.preventDefault();
    const fd = new FormData();
    fd.append('name', this.refs.name.value);
    fd.append('email', this.refs.email.value);
    fd.append('subject', this.refs.subject.value);
    fd.append('message', this.refs.message.value);
    alert("yes");
    
    axios.post('http://localhost/sky_laundry/index.php/api/suggestions', fd
    ).then(res=>
    {
        if(res.data.msg=='success')
        {
        
            Swal.fire({
                title: 'Success',
                text: res.data.data,
                type: 'success',
                
              });
              
          
         
          this.myFormRef.reset();
        }
        else{
            Swal.fire({
              title: 'Login Failed',
              text: res.data.data,
              icon: "Error",
              type:"error",
              buttons: true,
              dangerMode: true,
              
            });
          }
 
  }
  );
  }
  
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
            <a href="service.html" className="nav-item nav-link">Services</a>
            </Link>
            
            <Link to="/contact">
            <a href="contact.html"  className="nav-item nav-link active">Contact</a>
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
          <h1 className="mb-4 mb-md-0 text-white">Contact Us</h1>
        </div>
        <div className="col-md-6 text-center text-md-right">
          <div className="d-inline-flex align-items-center">
            <a className="btn text-white" href>Home</a>
            <i className="fas fa-angle-right text-white" />
            <a className="btn text-white disabled" href>Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Page Header Start */}
  {/* Contact Start */}
  <div className="container-fluid py-5">
    <div className="container" style={{maxWidth: 900}}>
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <div className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4" style={{width: 100, height: 100, borderWidth: '15px !important'}}>
                  <i className="fa fa-2x fa-map-marker-alt text-secondary" />
                </div>
                <h5 className="font-weight-medium m-0 mt-2">123 Street, UK</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <div className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4" style={{width: 100, height: 100, borderWidth: '15px !important'}}>
                  <i className="fa fa-2x fa-envelope-open text-secondary" />
                </div>
                <h5 className="font-weight-medium m-0 mt-2">info@example.com</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <div className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4" style={{width: 100, height: 100, borderWidth: '15px !important'}}>
                  <i className="fa fa-2x fa-phone-alt text-secondary" />
                </div>
                <h5 className="font-weight-medium m-0 mt-2">+012 345 6789</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="contact-form">
            <div id="success" />
            <form ref={(el) => this.myFormRef = el}  enctype="multipart/form-data">
              <div className="form-row">
                <div className="col-md-6">
                  <div className="control-group">
                    <input type="text" className="form-control" ref="name" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="control-group">
                    <input type="email" className="form-control" ref="email" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                    <p className="help-block text-danger" />
                  </div>
                </div>
              </div>
              <div className="control-group">
                <input type="text" className="form-control"  ref="subject" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                <p className="help-block text-danger" />
              </div>
              <div className="control-group">
                <textarea className="form-control" rows={6} ref="message" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                <p className="help-block text-danger" />
              </div>
              <div>
                <button onClick={this.addFormData} className="btn btn-primary py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
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
