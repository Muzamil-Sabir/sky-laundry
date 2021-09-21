import React, { Component } from 'react'

export default class dashboard extends Component {
    render() {
        return (
            <div className="hold-transition sidebar-mini layout-fixed">
            <div className="wrapper">
            
              <div className="content-wrapper">
  <div className="content-header">
    <div className="container-fluid">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title"><h1>Dashboard</h1></h3>
        </div>
        {/* /.card-header */}
        <div className="row">
<div className="col-lg-3 col-6">
  {/* small box */}
  <div className="small-box bg-info">
    <div className="inner">
      <h3>12</h3>
      <p>Total Books</p>
    </div>
    <div className="icon">
      <i className="ion ion-bag" />
    </div>
    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
  </div>
</div>
{/* ./col */}
<div className="col-lg-3 col-6">
  {/* small box */}
  <div className="small-box bg-success">
    <div className="inner">
      <h3>12</h3>
      <p>Total Users</p>
    </div>
    <div className="icon">
      <i className="ion ion-stats-bars" />
    </div>
    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
  </div>
</div>
{/* ./col */}
<div className="col-lg-3 col-6">
  {/* small box */}
  <div className="small-box bg-warning">
    <div className="inner">
      <h3>12</h3>
      <p>Assigned Books</p>
    </div>
    <div className="icon">
      <i className="ion ion-person-add" />
    </div>
    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
  </div>
</div>
{/* ./col */}
<div className="col-lg-3 col-6">
  {/* small box */}
  <div className="small-box bg-danger">
    <div className="inner">
      <h3>12</h3>
      <p>Pending Books</p>
    </div>
    <div className="icon">
      <i className="ion ion-pie-graph" />
    </div>
    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
  </div>
</div>
{/* ./col */}
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
