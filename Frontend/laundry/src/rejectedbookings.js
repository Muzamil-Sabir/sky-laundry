import React, { Component } from 'react'
import { ReactSession } from 'react-client-session';
import axios from 'axios';

export default class rejectedbookings extends Component {

    constructor(props) {
        super(props)
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

            var url="";
            const userid = ReactSession.get("userid");
            const role =  ReactSession.get("role");
            if(role==3)
            {
                url = 'http://localhost/sky_laundry/index.php/api/Bookings/'+userid+'/0/rejected';
            }
            else{
                url = "http://localhost/sky_laundry/index.php/api/Bookings/0/0/rejected";
            }

            //get request
            axios.get(url).then(res => 
            {
               // alert("yes");
                this.setState({data: res.data});
       
           });  
            
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
    <h3 className="card-title"><h1>Rejected Bookings</h1></h3>
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
          <th>Rejected at</th>
         
        
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
          <th>Rejected at</th>
          
        
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
