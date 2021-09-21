import React, { Component } from 'react'
import {Link,Route,Redirect} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ReactSession } from 'react-client-session';
export default class newuser extends Component {

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
      fd.append('username', this.refs.email.value);
      fd.append('password', this.refs.password.value);
      fd.append('phone', this.refs.phone.value);
      fd.append('usertype', this.refs.usertype.value);
     
   
      
      axios.post('http://localhost/sky_laundry/index.php/api/Users', fd
      ).then(res=>
      {
      //Success alert
      //Success alert
        
        if(res.data.msg=='success')
        {
        
            Swal.fire({
                title: 'Success',
                text: res.data.data,
                type: 'success',
                
              });
              
           window.location.href='/users';
         
          this.myFormRef.reset();
        }
        else{
          Swal.fire({
            title: 'Failed',
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
            <div className="wrapper">
            <div className="content-wrapper">
  <div className="content-header">
    <div className="container-fluid">
     
      <div className="row">
        <div className="col-md-8">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">New User</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form ref={(el) => this.myFormRef = el}  enctype="multipart/form-data">
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Name</label>
                  <input type="text" className="form-control" id="name" ref="name" placeholder="Enter  Name" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Email</label>
                  <input type="email" className="form-control" id="email" ref="email" placeholder="Enter Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="text" className="form-control" id="password" ref="password" placeholder="Password" />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Phone#</label>
                  <input type="text" className="form-control" id="phone" ref="phone" placeholder="Phone #" />
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputPassword1">User Type</label>
            <select className="form-control" ref="usertype">
            <option>-Select User Type-</option>
              <option>Business Owner</option>
              <option>Admin</option>
            </select>
                  </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" onClick={this.addFormData} className="btn btn-primary">Add User Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>
        )
    }
}
