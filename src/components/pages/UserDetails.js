import React, { useState, useEffect } from "react";
import axios from "axios";// for data transfer or retrive
import { Link } from 'react-router-dom';// for navigation like a tag
const UserDetails = () =>{
    const [users, setUser, search] = useState([]);//destructring 
    useEffect(() => {  
        loadUsers();
      }, []);// to prevent infinite loop [] empty array
      const loadUsers = async () => { 
          // for load user details ,promiss concept async and await
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());//reverse for latest in upper
      } 
      const deleteUser = async id =>{
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
      };
     
     
   
    return(
        <div className="container">
      <div className="py-4">
        <h1>User Details</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((users, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{users.name}</td>
                  <td>{users.username}</td>
                  <td>{users.email}</td>
                  <td>
                  <Link className="btn btn-primary mr-2" to={`/users/${users.id}`}> View </Link>
                  <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${users.id}`}> edit </Link>
                  <Link className="btn btn-danger mr-2 " onClick={()=>deleteUser(users.id)}> delete </Link>
                  </td>
                  <td></td>
                </tr>
              ))
            }
          </tbody>
        </table>


      </div>
    </div>
    );
};
export default UserDetails;