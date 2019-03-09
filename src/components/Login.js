import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import axios from '../axios';
import { withRouter } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom'

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

    handleChange = event => {this.setState({ [event.target.name]: event.target.value })};
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Login");
        axios
            .post("/api/auth", 
            { 
                username: this.state.username, 
                password: this.state.password
            })
            .then(data => {
              console.log(data);
              this.props.onLogin(data);
            // this.props.history.push('/')
            })
            .catch(err => {
                console.error(err)
                alert("sai pass roi!!!!")
            });   
    };

    render() {
        const { open } = this.state;
        return (
            <div className='btn'>
                <button type="button" className="btn ml-1" onClick={this.onOpenModal}>Login</button>
                <Modal open={open} onClose={this.onCloseModal} focusTrapped>
                    <h2>Login</h2>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                        <label>Username
                            <input type="text" name="username" onChange={this.handleChange}/>
                        </label>
                        </p>
                        <p>
                        <label>Password
                            <input type="password" name="password" onChange={this.handleChange}/>
                        </label>
                        </p>
                        <button type="submit" className="btn btn-primary" >Login</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default withRouter(Login);

