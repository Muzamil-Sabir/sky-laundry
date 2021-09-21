import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
export default class reports extends Component {

    constructor(props)
    {
      super(props);
      this.state = {
        data: []
              }
      this.addFormData = this.addFormData.bind(this);
     ReactSession.setStoreType("localStorage");
        const id = ReactSession.get("userid");
      if(!id)
      {
        window.location.href = '/login';
      }
    }

    addFormData(evt)
    {
      evt.preventDefault();
      const fd = new FormData();
    //   const from =this.refs.from.value;
    //   const to =this.refs.to.value;
      //alert(to);
      fd.append('from', this.refs.from.value);
      fd.append('to', this.refs.to.value);
      
      
      
      axios.post('http://localhost/sky_laundry/index.php/api/Reports', fd
      ).then(res=>
      {
        if(res.data.msg=="success")
        {
            this.setState({data: res.data.data});
        }
        else{
            Swal.fire({
              title: 'Failed to Generate',
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
            <div className="wrapper">
      <div className="content-wrapper">
<div className="content-header">
<div className="container-fluid">
<div className="card">
  <div className="card-header">
    <h3 className="card-title"><h1>Generate Reports</h1></h3>
  </div>
  <form ref={(el) => this.myFormRef = el}  enctype="multipart/form-data">
            <div className="row">
               
                <div className="col-md-2">
                <label htmlFor="exampleInputEmail1">From</label>
                <input type="date" className="form-control" id="from" ref="from" placeholder="Machine Name" />
                </div>
                <div className="col-md-2">
                <label htmlFor="exampleInputEmail1">To</label>
                <input type="date" className="form-control" id="to" ref="to" placeholder="Machine Name" />
                </div>
                <div className="col-md-2">
                <label htmlFor="exampleInputEmail1">&nbsp;</label>
                <button onClick={this.addFormData} type="submit" className="form-control btn btn-primary" >Generate</button>
                </div>
            </div>
            </form>
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
          <th>Completed on</th>
        
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
          <td>{result.completed_at}</td>
         
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
          <th>Completed on</th>
        
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
