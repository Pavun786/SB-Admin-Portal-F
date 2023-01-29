import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

import React from "react";


function User(){
  const users=[
    {
        id:1,
        name:"Pavun",
        position:"Team Leader",
        office:"success",
        age:"26",
        startdate:"21/08/1996",
        salary:"40,000"
    },
    {
        id:2,
        name:"Guna",
        position:"Team guide",
        office:"success",
        age:"26",
        startdate:"15/10/1996",
        salary:"40,000"
    },
    {
        id:3,
        name:"kavin ",
        position:"Team officer",
        office:"success",
        age:"26",
        startdate:"1/01/1996",
        salary:"40,000"
    },
    {
        id:4,
        name:"karthi",
        position:"Head",
        office:"success",
        age:"26",
        startdate:"10/08/1997",
        salary:"40,000"
    }
  ]

 
    return(
        <div class="container-fluid">

        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Users</h1>
                        <Link to="/portal/createuser" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i>Create user</Link>
                    </div>
        
         <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>#Sl</th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>#Sl</th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                                
                            </tr>
                        </tfoot>
                       <tbody>
                       {/* usely the map is return a values and its indexes,& here we used for s.no purpose */}
                        
                        {users.map((user,index)=>{
                            
            //here key={index} is given for prevent the virtual dom from confusing.because,if there is no keyvalues,then vdom consider the ele are duplicate..  
                       
                            return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.position}</td>
                                <td>{user.office}</td>
                                <td>{user.age}</td>
                                <td>{user.startdate}</td>
                                <td>{user.salary}</td>
                                
                                
                            </tr>
                        })}
                        
                        
                        </tbody> 
                            
                    </table>
                </div>
            </div>
        </div>

     </div>
    )
}
export default User;