import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
export default class confirmbooking extends Component {

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
              
            const booking_id = this.props.location.state.booking_id;
            
            axios.get('http://localhost/sky_laundry/index.php/api/Bookings/0/'+booking_id+'/pending').then(res => 
            {
            
             this.setState({data: res.data});
           
               }); 
            }


            addFormData(evt)
            {
              const userid = ReactSession.get("userid");
              evt.preventDefault();
              const fd = new FormData();
              const booking_id = this.refs.booking_id.value;
              const jsonData = {
                status: "accepted",
                respond_at:new Date().toLocaleString() + "",
                delivery_date:this.refs.deliverydate.value,
                
                  }
              
              
                  axios.put('http://localhost/sky_laundry/index.php/api/Bookings/'+booking_id,jsonData).then(res=>
                  {
              
              //Storing users detail in state array object
              this.setState({data: res.data});
             
                    Swal.fire({
                        title: 'Approval Success',
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
              <h3 className="card-title">Confirm Booking</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form ref={(el) => this.myFormRef = el}>
              <div className="card-body">
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">ID</label>
                  <input disabled defaultValue={result.id} type="text" className="form-control" id="booking_id" ref="booking_id" placeholder="Service Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Service Name</label>
                  <input disabled defaultValue={result.serv_name} type="text" className="form-control" id="servicename" ref="servicename" placeholder="Service Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Price</label>
                  <textarea disabled defaultValue={result.price} className="form-control" id="description" ref="description" rows="5" placeholder="Service Description"></textarea>
                  
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Quantity</label>
                  <input disabled  type="number" defaultValue={result.quantity} className="form-control" id="quantity" ref="quantity" placeholder="Enter Quantity" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Delivery Date</label>
                  <input   type="date" className="form-control" id="deliverydate" ref="deliverydate" />
                </div>
                
                <div className="form-group">
               
                  <input  hidden defaultValue={result.price}  type="number" className="form-control" id="price" ref="price" placeholder="Enter Quantity" />
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
