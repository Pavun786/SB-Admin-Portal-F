import {Link} from "react-router-dom"
import React from "react"

function Products(){
  const products=[
    {
     "BikeName": "Pulsar-150",
     "Brand": "bajaj",
     "Model": "150",
     "Catagory": "150CC",
     "Mileage": "52",
     "MaxSpeed": "125km/hr",
     "Price": "Rs.1,47,000"
    },
    {
     "BikeName": "R15",
     "Brand": "yamaha",
     "Model": "V3",
     "Catagory": "155CC",
     "Mileage": "55",
     "MaxSpeed": "150km/hr",
     "Price": "Rs.1,85,000"
    },
    {
     "BikeName": "Duke",
     "Brand": "KTM",
     "Model": "200",
     "Catagory": "200CC",
     "Mileage": "30",
     "MaxSpeed": "150km/hr",
     "Price": "Rs.2,10,000"
    },
    {
     "BikeName": "Apache",
     "Brand": "TVS",
     "Model": "160-4V",
     "Catagory": "160CC",
     "Mileage": "42",
     "MaxSpeed": "138km/hr",
     "Price": "Rs.1,60,000"
    }
   ]
   
    return(

        <div class="container-fluid">

        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Products</h1>
                        <Link to="/portal/createproduct" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
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