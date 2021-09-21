import React, { Component } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios';
import { ReactSession } from 'react-client-session';
export default class addservice extends Component {

  constructor(props)
    {
      super(props);
      this.addFormData = this.addFormData.bind(this);
      ReactSession.setStoreType("localStorage");
        const id = ReactSession.get("userid");
      if(!id)
      {
        window.location.href = '/login';
      }
    }


        //Form Submission
  addFormData(evt)
  {
    evt.preventDefault();
    const fd = new FormData();
    fd.append('servicename', this.refs.servicename.value);
    fd.append('description', this.refs.description.value);
    fd.append('price', this.refs.price.value);
    
    
    axios.post('http://localhost/sky_laundry/index.php/api/Services', fd
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
            <div className="content-wrapper">
  <div className="content-header">
    <div className="container-fluid">
     
      <div className="row">
        <div className="col-md-8">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Add New Service</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form ref={(el) => this.myFormRef = el}  enctype="multipart/form-data">
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Service Name</label>
                  <input type="text" className="form-control" id="servicename" ref="servicename" placeholder="Service Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Service Description</label>
                  <textarea className="form-control" id="description" ref="description" rows="5" placeholder="Service Description"></textarea>
                  
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Price</label>
                  <input type="text" className="form-control" id="price" ref="price" placeholder="Service" />
                </div>
                {/* <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Published on</label>
                  <input type="date" className="form-control" id="published_on" ref="published_on" placeholder="Published on" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Image</label>
                  <input required type="file" onChange = {this.fileSelect} className="form-control"  id="bookimg" itemName="bookimg" ref="bookimg"  />
                </div> */}
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" onClick={this.addFormData} className="btn btn-primary">Add Service Now</button>
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
