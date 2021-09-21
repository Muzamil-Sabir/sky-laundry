import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
export default class editservice extends Component {

    constructor(props) {
        
        super(props)
        this.addFormData = this.addFormData.bind(this);
          this.state = {
            data: []
                  }


                  ReactSession.setStoreType("localStorage");
                  const id = ReactSession.get("userid");
                  if(!id)
                  {
                    window.location.href = '/login';
                  }
          
          }


          componentDidMount(){
            const service_id = this.props.location.state.service_id;
            axios.get('http://localhost/sky_laundry/index.php/api/Services/'+service_id).then(res => 
            {
            
             this.setState({data: res.data});
           
               }); 
            }


            addFormData(evt)
            {
              evt.preventDefault();
              const fd = new FormData();
               const jsonData = {
                name: this.refs.servicename.value,
                descr: this.refs.description.value,
                price: this.refs.price.value
                  }
           
               const service_id = this.refs.service_id.value;
                //alert("yes");
              axios.put('http://localhost/sky_laundry/index.php/api/Services/'+service_id,jsonData).then(res=>
              {
                Swal.fire({
                    title: 'Updation Success',
                    text: res.data.data,
                    type: 'success',
                    
                  });
            
                 }
            );
            }



    render() {
        return (
            <div>
                {this.state.data.map((result) => {
                 return (
  <div className="content-wrapper">

  <div className="content-header">
    <div className="container-fluid">
     
      <div className="row">
           
        <div className="col-md-8">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Edit Service</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form ref={(el) => this.myFormRef = el}>
              <div className="card-body">
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">ID</label>
                  <input disabled defaultValue={result.id} type="text" className="form-control" id="service_id" ref="service_id" placeholder="Service Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Service Name</label>
                  <input defaultValue={result.name} type="text" className="form-control" id="servicename" ref="servicename" placeholder="Service Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Service Description</label>
                  <textarea defaultValue={result.descr} className="form-control" id="description" ref="description" rows="5" placeholder="Service Description"></textarea>
                  
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Price</label>
                  <input defaultValue={result.price} type="text" className="form-control" id="price" ref="price" placeholder="Service" />
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
                <button type="submit" onClick={this.addFormData} className="btn btn-primary">Update Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>



    </div>
  </div>
 
</div>
)
})}
          </div>
        )
    }
}
