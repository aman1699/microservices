import './App.css';
import { React } from 'react';

function App() {
  return (
    <div className="container" style={{marginTop:20}}>
   <div class="row">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Bangalore</option>
      <option>Mumbai</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="inputZip" class="form-label">Upload file</label>
    <input type="file" id="inputZip"/>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</div>
  
    </div>
  );
}

export default App;
