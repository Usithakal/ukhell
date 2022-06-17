import React from 'react';
import './App.css';



const App = () => {
  return (
    <div>
    <div className='container'>
   <div class="form-group col-md-3">
    <label for="inputAddress">Name</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Enter Name" />
  </div>
  <div class="form-group col-md-3">
    <label for="inputAddress2">Email</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Enter Email" />
  </div>
  <div class="form-group col-md-3">
    <label for="inputAddress2">Email</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Enter Email" />
  </div>
  <div class="form-group col-md-3">
    <label for="inputAddress2">Email</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Enter Email" />
  </div>
  <div class="form-group col-md-3">
    <label for="inputAddress2">Email</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Enter Email" />
  </div>
  <div className="col-md-9">
    
  </div>

</div>
<div className="btn">
  <button type="button" class="btn btn-success">Submit</button>
  
  </div>
</div>


  )
}

export default App;