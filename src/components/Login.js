import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            open: false,
        }
    };
    
    onOpenModal = () => {
        this.setState({ open: true });
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };

    handleUserNameChange = event => {this.setState({ username: event.target.value })};
    handlePasswordChange = event => {this.setState({ password: event.target.value })};    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Login");
        axios
            .post("http://localhost:6699/api/auth", 
            { 
                username: this.state.username, 
                password: this.state.password
            })
            .then(data => {
              console.log(data);
            })
            .catch(err => {
                console.error(err)
                alert("sai pass roi!!!!")
            });   
    };

    render() {
        const display = this.props.username ? (
            <div>
              <span className="navbar-text">Welcome, {this.props.username}</span>
            </div>
          ) : (
            <button
              className="btn btn-primary btn-block"
              onClick={this.props.onLogin}
            >
              Login
            </button>
          );
        const { open } = this.state;
        return (
            <div className='btn'>
                <button type="button" className="btn ml-1" onClick={this.onOpenModal}>Login</button>
                <Modal open={open} onClose={this.onCloseModal} focusTrapped>
                    <h2>Login</h2>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                        <label>Username
                            <input type="text" name="this.state.username" onChange={this.handleUserNameChange}/>
                        </label>
                        </p>
                        <p>
                        <label>Password
                            <input type="password" name="this.state.password" onChange={this.handlePasswordChange}/>
                        </label>
                        </p>
                        <button type="submit" className="btn btn-primary" >Login</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default Login;

