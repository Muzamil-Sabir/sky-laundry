import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
export default class viewallservices extends Component {
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
            axios.get('http://localhost/sky_laundry/index.php/api/Services').then(res => 
            {
               // alert("yes");
                this.setState({data: res.data});
       
           });  
            
            }


      //Delete Item
      deleteService(id,e){
         // alert(id);
        axios.delete(`http://localhost/sky_laundry/index.php/api/Services/${id}`)
          .then(res => {
            axios.get('http://localhost/sky_laundry/index.php/api/Services').then(res => 
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
    <h3 className="card-title"><h1>All Services</h1></h3>
  </div>
  {/* /.card-header */}
  <div className="card-body">
    <table id="example1" className="table table-bordered table-striped">
      <thead>
        <tr className="bg-green">
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Added at</th>
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
          <td> {result.descr}
          </td>
          <td>{result.price}</td>
          <td>{result.datetime}</td>
          { ReactSession.get("role")!=3?(         
          <td>
              
          <button className="btn btn-primary"  ><Link style={{ color: 'white' }} to={{
    pathname: "/editservice",
    state: {service_id:result.id} // your data array of objects
  }} >Edit</Link></button> &nbsp;
       <button className="btn btn-danger" onClick={(e) => this.deleteService(result.id, e)}>Delete</button>  &nbsp;
       
          </td>
           ):""
        }
         { ReactSession.get("role")==3?( 
        <td>
             <button className="btn btn-success"  ><Link style={{ color: 'white' }} to={{
    pathname: "/placeorder",
    state: {service_id:result.id} // your data array of objects
  }} >Place Order</Link></button>
        </td>
         ):""
        }
          </tr>
         )
        })}
      </tbody>
      <tfoot>
      <tr className="bg-green">
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Added at</th>
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
