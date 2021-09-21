import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
export default class users extends Component {

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

           

            //get request
            axios.get('http://localhost/sky_laundry/index.php/api/Users').then(res => 
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
    <h3 className="card-title"><h1>All Users</h1></h3>
  </div>
  {/* /.card-header */}
  <div className="card-body">
    <table id="example1" className="table table-bordered table-striped">
      <thead>
        <tr className="bg-green">
          <th>#</th>
          <th>User Name</th>
          <th>Contact#</th>
          <th>Email</th>
          <th>Status</th>
          <th>User Type</th>
          <th>Added at</th>
         
        </tr>
      </thead>
      <tbody>
      {this.state.data.map((result) => {
                 return (
         <tr>
          <td>{result.user_id}</td>
          <td> {result.name}
          </td>
          <td>{result.cellno}</td>
          <td>{result.email}</td>
          <td>{result.status}</td>
          { result.role==1?(
            <td>Admin</td>
          ):""
          }
         { result.role==2?(
            <td>Business Owner</td>
          ):""
          }
          { result.role==3?(
            <td>Normal User</td>
          ):""
          }
          <td>{result.created_at}</td>
          {/* <td> {result.address}</td>
          <td className="">{result.card_no}</td>
          <td>{result.date}</td> */}
          
          </tr>
         )
        })}
      </tbody>
      <tfoot>
      <tr className="bg-green">
          <th>#</th>
          <th>User Name</th>
          <th>Contact#</th>
          <th>Email</th>
          <th>Status</th>
          <th>User Type</th>
          <th>Added at</th>
         
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
