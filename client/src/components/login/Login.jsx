import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  
  
  
  return (
    <div className="container">
     <form className="form">
     <div className="row">
      <div className="col-md-12 text-center mb-3"> <h1>Login</h1></div>
     </div>
     
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">UserName</label>
    <div className="col-sm-10 mb-3">
      <input type="text" className="form-control" id="inputEmail3" placeholder="User-name" />
    </div>
  </div>
  
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10 mb-3">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
    </div>
  </div>
 
  <div className="form-group row">
    <div className="col-sm-10 ">
      <button type="submit" className="btn btn-primary">Log in</button>
      <span className="login">Not registered <Link to="/">Register</Link></span>
    </div>
  </div>
</form>
     
    </div>
  )
}

export default Login
