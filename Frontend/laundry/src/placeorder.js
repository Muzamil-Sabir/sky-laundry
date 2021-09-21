import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
export default class placeorder extends Component {
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
              const userid = ReactSession.get("userid");
              const username = ReactSession.get("name");
              const email = ReactSession.get("email");
              evt.preventDefault();
              const fd = new FormData();
              fd.append('service_name', this.refs.servicename.value);
              fd.append('address', this.refs.address.value);
              fd.append('quantity', this.refs.quantity.value);
              fd.append('price', this.refs.price.value);
              fd.append('u_id',userid);
              fd.append('username',username);
              fd.append('email',email);
              
              
              axios.post('http://localhost/sky_laundry/index.php/api/Bookings', fd
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
                        title: 'Order Place Failed',
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
                {this.state.data.map((result) => {
                 return (
  <div className="content-wrapper">

  <div className="content-header">
    <div className="container-fluid">
     
      <div className="row">
           
        <div className="col-md-8">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Place an Order</h3>
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
                  <input disabled defaultValue={result.name} type="text" className="form-control" id="servicename" ref="servicename" placeholder="Service Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Service Description</label>
                  <textarea disabled defaultValue={result.descr} className="form-control" id="description" ref="description" rows="5" placeholder="Service Description"></textarea>
                  
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Quantity</label>
                  <input  type="number" className="form-control" id="quantity" ref="quantity" placeholder="Enter Quantity" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Address</label>
                  <textarea   className="form-control" id="address" ref="address" rows="5" placeholder="Address"></textarea>
                  
                </div>
                <div className="form-group">
               
                  <input hidden defaultValue={result.price}  type="number" className="form-control" id="price" ref="price" placeholder="Enter Quantity" />
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
                <button type="submit" onClick={this.addFormData} className="btn btn-primary">Place Order Now</button>
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
