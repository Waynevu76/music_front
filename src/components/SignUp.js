import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            confirmPassword:'',
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
        console.log("register");
        if (this.state.confirmPassword === this.state.password) {
            axios
            .post("http://localhost:6699/api/users", 
            { 
                username: this.state.username, 
                password: this.state.password
            })
            .then(data => {
              console.log(data);
            })
            .catch(err => {
                console.error(err)
                alert("User da ton tai")
            });
        } else alert("pass khong giong nhau! thu lai")
           
    };

  render() {
    const { open } = this.state;
    return (
      <div className="btn">
        <button type="button" className="btn ml-1" onClick={this.onOpenModal}>Sign up</button>
        <Modal open={open} onClose={this.onCloseModal} focusTrapped>
            <h2>Sign Up</h2>
            <form onClick={this.handleSubmit}>
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
                <p>
                <label>Confirm Password
                    <input type="password" name="confirmPassword" onChange={this.handleChange}/>
                </label>
                </p>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            </Modal>
      </div>
    )
  }
}
