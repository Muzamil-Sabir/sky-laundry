import React, { Component } from 'react'
import {Link,Route,Redirect} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ReactSession } from 'react-client-session';
export default class login extends Component {

  constructor(props)
  {
    super(props);
    this.addFormData = this.addFormData.bind(this);
    ReactSession.setStoreType("localStorage"); 
    this.state = {
      data: []
            }
  }
  

  componentDidMount(){
  //   const id = ReactSession.get("userid");
  //   if(id)
  //   {
  //     window.location.href = '/orders';
  //   }
    
    }

  addFormData(evt)
  {
    evt.preventDefault();
    const fd = new FormData();
    fd.append('username', this.refs.username.value);
    fd.append('password', this.refs.password.value);
 
    
    axios.post('http://localhost/sky_laundry/index.php/api/auth', fd
    ).then(res=>
    {
      if(res.data.msg=="success")
      {
        
        this.setState({data: res.data.data});
        this.state.data.map((result) => {
          ReactSession.set("userid", result.user_id);
          ReactSession.set("name", result.name);
          ReactSession.set("email", result.email);
          ReactSession.set("role", result.role);
          if(result.role==1)
          {
            window.location.href='/booking';
          }
          else if(result.role==2)
          {
            window.location.href='/viewallservices';
          }
          else{
            window.location.href='/viewallservices';
          }
})
        
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
            <div className="hold-transition login-page">
 <div className="login-box">
  {/* /.login-logo */}
  <div className="card card-outline card-primary">

    <div className="card-header text-center">
      
      <a href="/" className="h1"><b>Sky &nbsp;</b>Laundry</a>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form ref={(el) => this.myFormRef = el}>
        <div className="input-group mb-3">
          <input id="username" ref="username"  type="email" className="form-control" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" id="password" ref="password"  className="form-control" placeholder="Password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div> */}
          {/* /.col */}
         
          {/* /.col */}
        </div>
      
      <div className="social-auth-links text-center mt-2 mb-3">
        <button onClick={this.addFormData} type="submit" className="btn btn-block btn-primary">
          Sign in 
       </button> <hr/>
    <Link to="/register"> 
       <button type="submit" className="btn btn-block btn-info">
         Register 
       </button> </Link>  <br></br>
       <Link to="/"> 
       <button type="submit" className="btn btn-block btn-secondary">
         Back to Home 
       </button> </Link> 
      </div>
     
      </form>
    </div>
  </div>
</div>

</div>
        )
    }
}
