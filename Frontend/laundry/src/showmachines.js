import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
export default class showmachines extends Component {
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
           axios.get('http://localhost/sky_laundry/index.php/api/Machines').then(res => 
           {
              // alert("yes");
               this.setState({data: res.data});
      
          });  
           
           }

     //Delete Item
     deleteMachine(id,e){
        // alert(id);
       axios.delete(`http://localhost/sky_laundry/index.php/api/Machines/${id}`)
         .then(res => {
           axios.get('http://localhost/sky_laundry/index.php/api/Machines').then(res => 
           {
           //Storing users detail in state array object
           this.setState({data: res.data});
           }); 
           Swal.fire({
               title: 'Deletion Success',
               text: res.data.data,
               type: 'success',
               
             });
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
    <h3 className="card-title"><h1>Machines</h1></h3>
  </div>
  {/* /.card-header */}
  <div className="card-body">
    <table id="example1" className="table table-bordered table-striped">
      <thead>
        <tr className="bg-green">
          <th>Machine Name</th>
          <th>Type</th>
          <th>Availability</th>
          
          {/* <th>address</th>
          <th>card_no</th>
          <th>Requested at</th> */}
          <th></th>
        </tr>
      </thead>
      <tbody>
      {this.state.data.map((result) => {
                 return (
         <tr>
          <td>{result.name}</td>
          <td> {result.type}
          </td>
          <td>{result.availability}</td>
         
          
          <td>
              
          <button className="btn btn-primary"  ><Link style={{ color: 'white' }} to={{
    pathname: "/editmachine",
    state: {machine_id:result.id} // your data array of objects
  }} >Change Availability</Link></button> &nbsp;
       <button className="btn btn-danger" onClick={(e) => this.deleteMachine(result.id, e)}>Delete</button>  &nbsp;
       
          </td>
         
    
          </tr>
         )
        })}
      </tbody>
      <tfoot>
      <tr className="bg-green">
          <th>Machine Name</th>
          <th>Type</th>
          <th>Availability</th>
          
          {/* <th>address</th>
          <th>card_no</th>
          <th>Requested at</th> */}
          <th></th>
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
