import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import Firebase from '../../config/firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(0);
    const [password, setPassword] = useState(0)
    const loginHandler = (e) => {
        e.preventDefault();
        Firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            navigate('/')
        }).catch((error) => {
            console.log(error.message)
        })

    }
    return (
        <div>
            <div class="signup-form">
                <form onSubmit={loginHandler}>
                    <h2>Login</h2>
                    <p>Please enter user credentials !</p>
                    <hr />
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fa fa-paper-plane"></i>
                                </span>
                            </div>
                            <input type="email" class="form-control" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required="required" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fa fa-lock"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required="required" />
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-lg">Login</button>
                    </div>
                </form>
                <div class="text-center">You Don't have an account? <Link to="/signup">Sign up here</Link></div>
            </div>

        </div>

    )
}

export default Login