import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import Firebase from '../../config/firebase';

function Signup() {
  const [username,setUsername] = useState(0);
  const [email,setEmail] = useState(0);
  const [password,setPassword] = useState(0);

  const submitHandler = (e)=>{
    e.preventDefault();
    Firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      user.updateProfile({ displayName: username }).then((user) => {
        Firebase.firestore().collection('user').add({
          uId: userCredential.user.uid,
          name: username,
          email: email
        }).catch((error) => {
          console.log(error.message)
        })
      })
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });
  }


  return (
    <div>
      <div class="signup-form">
        <form onSubmit={submitHandler}>
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account!</p>
          <hr/>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <span class="fa fa-user"></span>
                  </span>
                </div>
                <input type="text" class="form-control" name="username" onChange={(e)=> setUsername(e.target.value)} placeholder="Username" required="required"/>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-paper-plane"></i>
                  </span>
                </div>
                <input type="email" class="form-control" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required="required"/>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
                <input type="text" class="form-control" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required="required"/>
              </div>
            </div>
            <div class="form-group">
              <label class="form-check-label">
                <input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
            </div>
        </form>
        <div class="text-center">Already have an account? <Link to="/login">Login here</Link></div>
      </div>

    </div>

  )
}

export default Signup