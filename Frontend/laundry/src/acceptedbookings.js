import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
export default class acceptedbookings extends Component {

    constructor(props) {
        super(props)
          this.state = {
            data: []
                  }
              
         ReactSession.setStoreType("localStorage");
         const id = ReactSession.get("userid");
         if(!id)
         {
           window.location.href = '/';
         }
                  
          }

    
          componentDidMount(){

            var url="";
            const userid = ReactSession.get("userid");
            const role =  ReactSession.get("role");
            if(role==3)
            {
                url = 'http://localhost/sky_laundry/index.php/api/Bookings/'+userid+'/0/accepted';
            }
            else{
                url = "http://localhost/sky_laundry/index.php/api/Bookings/0/0/accepted";
            }

            //get request
            axios.get(url).then(res => 
            {
               // alert("yes");
                this.setState({data: res.data});
       
           });  
            
            }

            completeBooking(id,e){

                const jsonData = {
                    status: "completed",
                    completed_at:new Date().toLocaleString() + "",
                    
                      }
                // alert(id);
                axios.put('http://localhost/sky_laundry/index.php/api/Bookings/'+id,jsonData).then(res=>
                {
                    axios.get('http://localhost/sky_laundry/index.php/api/Bookings/0/0/accepted').then(res => 
            {
            //Storing users detail in state array object
            this.setState({data: res.data});
            }); 
                  Swal.fire({
                      title: 'Completed Success',
                      text: res.data.data,
                      type: 'success',
                      
                    });
              
                   }
              );
             
             } 


    render() {
        return (
            <div>
            <div className="wrapper">
      <div className="content-wrapper">
<div className="content-header">
<div className="container-fluid">
<div className="card">
  <div className="card-header">
    <h3 className="card-title"><h1>Accepted Bookings</h1></h3>
  </div>
  {/* /.card-header */}
  <div className="card-body">
    <table id="example1" className="table table-bordered table-striped">
      <thead>
        <tr className="bg-green">
        <th>User Name</th>
          <th>Service Name</th>
          <th>Price</th>
          <th>quantity</th>
          <th>address</th>
          <th>Status</th>
          <th>Amount</th>
          <th>Requested at</th>
          <th>Respond at</th>
          <th>Delivery Date</th>
          { ReactSession.get("role")!=3?(
          <th>
              
          </th>
           ):""
        }
        </tr>
      </thead>
      <tbody>
      {this.state.data.map((result) => {
                 return (
         <tr>
           <td>{result.username}</td>
          <td>{result.serv_name}</td>
          <td> {result.price}
          </td>
          <td>{result.quantity}</td>
          <td> {result.address}</td>
          <td className="">{result.status}</td>
          <td className="">{result.paid_amount}</td>
          <td>{result.placed_at}</td>
          <td>{result.respond_at}</td>
          <td>{result.delivery_date}</td>
          { ReactSession.get("role")!=3?(
          <td>
          <button className="btn btn-primary" onClick={(e) => this.completeBooking(result.id, e)}>Mark as Completed</button>  &nbsp; &nbsp;

          </td>
           ):""
        }
          </tr>
         )
        })}
      </tbody>
      <tfoot>
      <tr className="bg-green">
           <th>User Name</th>
          <th>Service Name</th>
          <th>Price</th>
          <th>quantity</th>
          <th>address</th>
          <th>Status</th>
          <th>Amount</th>
          <th>Requested at</th>
          <th>Respond at</th>
          <th>Delivery Date</th>
          { ReactSession.get("role")!=3?(
          <th></th>
          ):""
        }
        </tr>
      </tfoot>
    </table>
  </div>
  {/* /.card-body */}
</div>
</div>
</div>
</div>
</div>
    </div>
        )
    }
}
