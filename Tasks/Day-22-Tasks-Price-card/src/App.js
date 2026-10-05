import React from 'react';
import './App.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends React.Component {
 
  render() {
   
    return (
     
      <div className="maincontainer">
       <section>
          <div class="container py-5">
            <header class="text-center mb-5 text-white">
              <div class="row">  
              </div>
            </header>
           
            <div class="row text-center align-items-end">
             
              <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-muted ">Free</h1>
                  <h2 class="h1 font-weight-bold">$0<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                  <hr></hr>
                  <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i> ✔️ Single User</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i> ✔️ 5GB Storage</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i> ✔️ Unlimited Public Projects</li>
                      <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i> ✔️ Community Access</li>
                      <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <a>✖️ Unlimited Private Projects</a>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <a>✖️ Dedicated Phone Support</a>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <a>✖️ Free Subdomain</a>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <a>✖️ Monthly Status Reports</a>
                    </li>
                  </ul>
                  <div class="d-grid gap-2 col-6 mx-auto">
                  <a href="#" class="btn btn-primary btn-lg p-2 shadow rounded-pill" >Button</a>
                  </div>          
                 </div>
              </div>
             
              <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-muted ">Plus</h1>
                  <h2 class="h1 font-weight-bold">$9<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                  <hr></hr>
                  <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i> ✔️ 5 Users</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i>✔️ 50GB Storage</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i>✔️ Unlimited Public Projects</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i>✔️ Community Access</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i>✔️ Unlimited Private Projects</li>
                      <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i>✔️ Dedicated Phone Support</li>
                      <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i>✔️ Free Subdomain</li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <a>✖️ Monthly Status Reports</a>
                    </li>
                  </ul>
                  <div class="d-grid gap-2 col-6 mx-auto">
                  <a href="#" class="btn btn-primary btn-lg p-2 shadow rounded-pill" >Button</a>
                  </div>                
                  </div>
              </div>
             
              <div class="col-lg-4">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-muted ">Pro</h1>
                  <h2 class="h1 font-weight-bold">$49<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                  <hr></hr>
                  <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i>✔️ Unlimited Users</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i>✔️ 150GB Storage</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i>✔️ Unlimited Public Projects</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i>✔️ Community Access</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i>✔️ Unlimited Private Projects</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i>✔️ Dedicated Phone Support</li>             
                  <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i>✔️ Unlimited Free Subdomains</li> 
                  <li class="mb-3">
                      <i class="fa fa-check mr-2 text-bold"></i>✔️ Monthly Status Reports</li>
                  </ul>
                  <div class="d-grid gap-2 col-6 mx-auto">
                  <a href="#" class="btn btn-primary btn-lg p-2 shadow rounded-pill" >Button</a>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </section>
      </div>
     
      
)
};
}
export default Home;