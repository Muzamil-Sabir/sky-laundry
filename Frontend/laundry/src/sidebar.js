import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
export default class sidebar extends Component {
  constructor(props)
  {
    super(props);
    
    ReactSession.setStoreType("localStorage"); 
  }
  componentDidMount(){
    // ReactSession.setStoreType("localStorage");
    
   

      
      }
    render() {
        return (
            <div className="hold-transition sidebar-mini layout-fixed" >
  <aside className="main-sidebar sidebar-blue bg-warning elevation-4">
    {/* Brand Logo */}
    <a href="#" className="brand-link">
      <img src="app-logo.png"  alt="AdminLTE Logo" className="brand-image " style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">Sky Laundry</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="sidebarlogo3.jpg" className="img-circle elevation-5" alt="User Image" />
        </div>
        <div className="info">
          {ReactSession.get("name")} <br></br>
          {ReactSession.get("email")}
        </div>
      </div>
      <hr></hr>
      {/* SidebarSearch Form */}
      {/* <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw" />
            </button>
          </div>
        </div>
      </div> */}
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          {/* <li className="nav-item menu-open">
            <a href="#" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./index.html" className="nav-link active">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index2.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index3.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li> */}
           
        {/* <li className="nav-item"> 
            <a href="" className="nav-link"> <Link to='/dashboard'>
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
                
              </p> </Link>
            </a>
          </li>  */}
       { ReactSession.get("role")==17?(
        <li className="nav-item">
            <a  className="nav-link">  <Link to='/dashboard'>
              <i className="nav-icon fas fa-th" />
              <p>
                Dashboard 
                {/* <span className="right badge badge-danger">New</span> */}
              </p> </Link>
            </a>
          </li>
              ):""
            }
    
         
         

          <li className="nav-item">
            <a href="#" className="nav-link">  
              <i className="nav-icon fas fa-copy" />
              <p>
                Bookings
                <i className="fas fa-angle-left right" />
               
              </p>
            </a>
            <ul className="nav nav-treeview">

          
              <li className="nav-item"> <Link to='/booking'>
                <a href="" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>New Bookings</p>
                </a>  </Link>
              </li>
               
              <li className="nav-item"> <Link  to='/acceptedbookings'>
                <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Accepted Bookings</p>
                </a> </Link>
              </li>

              <li className="nav-item"> <Link  to='/completedbookings'>
                <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Completed Bookings</p>
                </a> </Link>
              </li>
              
              <li className="nav-item"> <Link  to='/rejectedbookings'>
                <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Rejected Bookings</p>
                </a> </Link>
              </li>
              
              {/* <li className="nav-item"> <Link  to='/assignedList'>
                <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Assigned List</p>
                </a> </Link>
              </li> */}
             
            </ul>
          </li>

              
          <li className="nav-item">
            <a href="#" className="nav-link">  
              <i className="nav-icon fas fa-copy" />
              <p>
                Services
                <i className="fas fa-angle-left right" />
               
              </p>
            </a>
            <ul className="nav nav-treeview">

            { ReactSession.get("role")!=3?(
              <li className="nav-item"> <Link to='/addservice'>
                <a href="" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Service</p>
                </a>  </Link>
              </li>
                    ):""
                  }
              <li className="nav-item"> <Link  to='/viewallservices'>
                <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Show All Services</p>
                </a> </Link>
              </li>
              
              {/* <li className="nav-item"> <Link  to='/assignedList'>
                <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Assigned List</p>
                </a> </Link>
              </li> */}
             
            </ul>
          </li>
          { ReactSession.get("role")==1?(
           <li className="nav-item">
           <a href="#" className="nav-link">  
             <i className="nav-icon fas fa-industry" />
             <p>
               Machines
               <i className="fas fa-angle-left right" />
              
             </p>
           </a>
           <ul className="nav nav-treeview">

         
             <li className="nav-item"> <Link to='/addmachine'>
               <a href="" className="nav-link">
                 <i className="far fa-circle nav-icon" />
                 <p>Add Machine</p>
               </a>  </Link>
             </li>
              
             <li className="nav-item"> <Link  to='/showmachines'>
               <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                 <i className="far fa-circle nav-icon" />
                 <p>Show Status</p>
               </a> </Link>
             </li>

            
           
            
           </ul>
         </li>
           ):""
          }
          
          

        { ReactSession.get("role")==1?(
          <li className="nav-item">
          <a href="#" className="nav-link">  
            <i className="nav-icon fas fa-users" />
            <p>
              Manage Users
              <i className="fas fa-angle-left right" />
             
            </p>
          </a>
          <ul className="nav nav-treeview">

        
            <li className="nav-item"> <Link to='/newuser'>
              <a href="" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Add User</p>
              </a>  </Link>
            </li>
             
            <li className="nav-item"> <Link  to='/users'>
              <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Users List</p>
              </a> </Link>
            </li>

           
          
           
          </ul>
        </li>

          
           ):""
          }

{ ReactSession.get("role")!=3?(
      <li className="nav-item"> <Link  to='/reports'>
            <a href="pages/widgets.html" className="nav-link"> 
              <i className="nav-icon fas fa-file" />
              <p>
                Reports
                
              </p>
            </a> </Link>
          </li>
     ):""
    }

{ ReactSession.get("role")==1?(
          <li className="nav-item">
            <a href="" className="nav-link">  <Link to='/suggestions'>
              <i className="nav-icon fas fa-list" />
              <p>
                Suggestions 
                {/* <span className="right badge badge-danger">New</span> */}
              </p> </Link>
            </a>
          </li>

          
           ):""
          }
          <li className="nav-item"> <Link  to='/logout'>
            <a href="pages/widgets.html" className="nav-link"> 
              <i className="nav-icon fas fa-sign-out-alt" />
              <p>
                Logout
                
              </p>
            </a> </Link>
          </li>


        
          
     
         
          
         
          
    
        
     
      
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}
