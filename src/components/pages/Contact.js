import React from 'react';
import Axios from "axios";
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            contactNumber: '',
            name: ''
         }
    }
    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit = async e => {
        e.preventDefault();
        await Axios.post("http://localhost:3003/users", this.state);
        this.setState({
            [e.target.value]:""
        });

    }
    render() {
        return (
            <div className="container">
                <form className="py-4" onSubmit={e => this.onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="inputUserName">Name</label>
                        <input type="text" name="name" value={this.state.value} onChange={this.handleInputChange} className="form-control"
                            id="inputUserName" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputUserName">User Name</label>
                        <input type="text" name="username" value={this.state.value} onChange={this.handleInputChange} className="form-control"
                            id="inputUserName" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputUserEmail">Email Address</label>
                        <input type="email" name="email" value={this.state.value} onChange={this.handleInputChange} className="form-control"
                            id="inputUserEmail" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputUserContactNo">Contact No</label>
                        <input type="number" name="contactNumber" value={this.state.value} onChange={this.handleInputChange} className="form-control"
                            id="inputUserContactNo" aria-describedby="emailHelp" />
                    </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }
}
export default Contact;