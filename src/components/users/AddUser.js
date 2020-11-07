import { useHistory } from "react-router-dom";
import Axios from "axios";
import React,{useState} from "react";

const AddUser = () => {
    // let history = useHistory;
    let history = useHistory();
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const { name , username , email , phone , website} = user;
    const onInputChange = (e) =>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit= async e=>{
        e.preventDefault();
        await Axios.post("http://localhost:3003/users",user);
        history.push("/");
    }
    return (
       <div className="container">
       <div className="w-75 mx-auto shadow p-5">
       <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
            <div class="form-group">
                 <input type="text" 
                          class="form-control form-control-lg" 
                          id="validationCustom01" 
                          value={name}
                          onChange={e => onInputChange(e)}
                          name="name"
                          placeholder="Enter Your Name"/>
                
            </div>
            <div class="form-group">
                
                   <input type="text" 
                          class="form-control form-control-lg" 
                          id="validationCustom02"
                          value={username}
                          onChange={e => onInputChange(e)}
                          name="username"
                           placeholder="Enter Your UserName"/>
                  
            </div>
            <div class="form-group">
                
                   <input type="text" 
                          class="form-control form-control-lg" 
                          id="validationCustom03"
                          value={email}
                          onChange={e => onInputChange(e)}
                          name="email"
                           placeholder="Enter Your Email Address"/>
                
            </div>
            <div class="form-group">
                
                   <input type="text" 
                          class="form-control form-control-lg" 
                          id="validationCustom04"
                          value={phone}
                          onChange={e => onInputChange(e)}
                          name="phone"
                           placeholder="Enter Your Phone Number" />
                
            </div>
            <div class="form-group">
               
                   <input type="text" 
                          class="form-control form-control-lg" 
                          id="validationCustom05"
                          value={website}
                          onChange={e => onInputChange(e)}
                          name="website"
                           placeholder="Enter Your Website Name"/>
               
            </div>


            <button class="btn btn-primary" type="submit">Submit form</button>
        </form>
        </div>
        </div>
    );
}
export default AddUser; 