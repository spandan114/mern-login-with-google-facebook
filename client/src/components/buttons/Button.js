import React from 'react'
import { useHistory } from "react-router-dom";
import {useSelector} from 'react-redux';
import './button.css'
import { Link } from 'react-router-dom'

function Button() {

//   const history = useHistory()
//   const user = useSelector(state => state.authReducer)

//   if(user){
//     history.push('/profile')
// }

    return (
<section className="login-block pt-5">
       <div className="container-fluid">
        <div className="auth-box card">
         <div className="card-block">
          <div className="row">
            <div className="col-md-12"> 
               <a className="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="http://localhost:5000/auth/facebook">
                 <img src="https://img.icons8.com/fluent/26/000000/facebook-new.png" alt="fbimage" /> Signup Using Facebook
               </a> 
             </div>
          </div> 
        <div className="or-container">
        <div className="line-separator"></div>
        <div className="or-label">or</div>
             <div className="line-separator"></div>
        </div>
        <div className="row">
            <div className="col-md-12"> 
               <a className="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="http://localhost:5000/auth/google">
                 <img src="https://img.icons8.com/color/26/000000/google-logo.png" alt="googleimage"/> Signup Using Google
               </a> 
            </div>
        </div> 
       </div>
       </div>  
     </div>
  </section>
                                            
    )
}

export default Button
