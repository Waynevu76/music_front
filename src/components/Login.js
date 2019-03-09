import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className='btn'>
                <button type="button" className="btn ml-1">Login</button>
                <button type="button" className="btn ml-1">Sign up</button>
            </div>
        );
    }
}

export default Login;