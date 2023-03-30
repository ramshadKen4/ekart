import React from 'react'
import './Login.css'

function Login() {
    return (
        <div>

            <div class="signup-form">
                <form action="/examples/actions/confirmation.php" method="post">
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
                            <input type="email" class="form-control" name="email" placeholder="Email Address" required="required" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fa fa-lock"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" name="password" placeholder="Password" required="required" />
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-lg">Login</button>
                    </div>
                </form>
                <div class="text-center">You Don't have an account? <a href="signup">Sign up here</a></div>
            </div>

        </div>

    )
}

export default Login