import React, { Component } from 'react';

class Login extends Component {
    handleSubmit = e=>{
        e.preventDefault();

        console.log("Submitted");
    }
    
    render() { 
        return ( 
            <div>
                
                <div class="row">
                    <div class="col-md-6">
                    </div>
                    <div class="col-md-6">
                    <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" className="form-control" autoFocus/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="text" className="form-control"/>
                    </div>
                    <button className="btn btn-primary ">Submit</button>
                </form>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Login;