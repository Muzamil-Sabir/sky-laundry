import React, { Component } from 'react'
import {Link,Route,Redirect} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ReactSession } from 'react-client-session';
export default class register extends Component {

    constructor(props)
    {
      super(props);
      this.addFormData = this.addFormData.bind(this);
     
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
      fd.append('name', this.refs.name.value);
      fd.append('username', this.refs.username.value);
      fd.append('password', this.refs.password.value);
      fd.append('phone', this.refs.phone.value);
     
   
      
      axios.post('http://localhost/sky_laundry/index.php/api/Register', fd
      ).then(res=>
      {
      //Success alert
      //Success alert
        
        if(res.data.msg=='success')
        {
        
            Swal.fire({
                title: 'Registration Success',
                text: res.data.data,
                type: 'success',
                
              });
              
           window.location.href='/login';
         
          this.myFormRef.reset();
        }
        else{
          Swal.fire({
            title: 'Registration Failed',
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
                 <p className="login-box-msg">Register yourself</p>
                 <form ref={(el) => this.myFormRef = el}>

                 <div className="input-group mb-3">
                     <input required type="text" id="name" ref="name"  className="form-control" placeholder="Name" />
                     <div className="input-group-append">
                       <div className="input-group-text">
                         <span className="fas fa-user" />
                       </div>
                     </div>
                   </div>


                   <div className="input-group mb-3">
                     <input required type="email" id="username" ref="username"  className="form-control" placeholder="Email" />
                     <div className="input-group-append">
                       <div className="input-group-text">
                         <span className="fas fa-envelope" />
                       </div>
                     </div>
                   </div>
                   <div className="input-group mb-3">
                     <input required type="password" id="password" ref="password"  className="form-control" placeholder="Password" />
                     <div className="input-group-append">
                       <div className="input-group-text">
                         <span className="fas fa-lock" />
                       </div>
                     </div>
                   </div>

                  

                   <div className="input-group mb-3">
                     <input required type="text" id="phone" ref="phone"  className="form-control" placeholder="Phone#" />
                     <div className="input-group-append">
                       <div className="input-group-text">
                         <span className="fas fa-phone" />
                       </div>
                     </div>
                   </div>
                 
                 <div className="social-auth-links text-center mt-2 mb-3">
                   <button onClick={this.addFormData} type="submit" className="btn btn-block btn-primary">
                     Register 
                  </button> <hr/>
               <Link to="/login"> 
                  <button type="submit" className="btn btn-block btn-info">
                    Sigin In 
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
