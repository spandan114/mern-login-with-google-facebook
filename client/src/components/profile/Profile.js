import React from 'react'
import { useHistory } from "react-router-dom";
import {useSelector} from 'react-redux';
import './profile.css'

function Profile() {

    const history = useHistory()
    const user = useSelector(state => state.authReducer)
    
    if(!user){
        history.push('/')
    }
    return (
    <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                                <div className="m-b-25"> <img src={user?user.img:"loding"} className="img-radius" alt="User-Profile-Image" /> </div>
                                <h6 className="f-w-600">{user?user.name:""}</h6>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>

                                    <div className="col-sm-12">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400">{user?user.email:""}</h6>
                                    </div> 
                                    <div className="col-sm-12">
                                        <p className="m-b-10 f-w-600">Id</p>
                                        <h6 className="text-muted f-w-400">{user?user.googleId:""}</h6>
                                    </div>                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
     )
}

export default Profile
