import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"


function Products(){

   const[products,setProducts]=useState([])

   useEffect(()=>{
     loadData()
   })

   let loadData=async()=>{
       let products=await axios.get("https://63770e2281a568fc250af260.mockapi.io/user")
       setProducts(products.data)
   }
   
    return(

        <div class="container-fluid">

        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Products</h1>
                        <Link to="/portal/products/createproduct" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i>Create Product</Link>
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
                                
                                <th>Bike Name</th>
                                <th>Brand</th>
                                <th>Model</th>
                                <th> CC-catagory</th>
                                <th>Mileage</th>
                                <th>Max.Speed</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                
                                <th>Bike Name</th>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>CC-catagory</th>
                                <th>Mileage</th>
                                <th>Max.Speed</th>
                                <th>Price</th>
                            </tr>
                        </tfoot>
                       <tbody>
                       
                        
                        {/* {users.map((user,index)=>{
                            
                   
                            return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.position}</td>
                                <td>{user.office}</td>
                                <td>{user.age}</td>
                                <td>{user.startDate}</td>
                                <td>{user.salary}</td>
                                <td>
                                    <Link to={`/portal/users/${user.id}`} className="btn btn-sm btn-warning mr-2">View</Link>
                                    <Link to={`/portal/user/edit/${user.id}`} className="btn btn-sm btn-primary mr-2">Edit</Link>
                                    <button onClick={()=>userDelete(user.id)} className="btn btn-sm btn-danger mr-2">Delete</button>
                                </td>
                                
                            </tr>
                        })}
                         */}
                        {products.map((product,index)=>{
                            return <tr key={index}>

                                <td>{product.BikeName}</td>
                                <td>{product.Brand}</td>
                                <td>{product.Model}</td>
                                <td>{product.Catagory}</td>
                                <td>{product.Mileage}</td>
                                <td>{product.MaxSpeed}</td>
                                <td>{product.Price}</td>

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
export default Products;