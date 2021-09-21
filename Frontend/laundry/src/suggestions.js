import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
export default class suggestions extends Component {

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
           axios.get('http://localhost/sky_laundry/index.php/api/Suggestions').then(res => 
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
    <h3 className="card-title"><h1>Suggestions</h1></h3>
  </div>
  {/* /.card-header */}
  <div className="card-body">
    <table id="example1" className="table table-bordered table-striped">
      <thead>
        <tr className="bg-green">
          <th> Name</th>
          <th>Email</th>
          <th>Subject</th>
          <th>Message</th>
         
        </tr>
      </thead>
      <tbody>
      {this.state.data.map((result) => {
                 return (
         <tr>
          <td>{result.name}</td>
          <td> {result.email}
          </td>
          <td>{result.subject}</td>
          <td>{result.message}</td>
          
         
         
    
          </tr>
         )
        })}
      </tbody>
      <tfoot>
      <tr className="bg-green">
      <th> Name</th>
          <th>Email</th>
          <th>Subject</th>
          <th>Message</th>
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
