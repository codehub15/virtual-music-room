import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../context/authContext'


export default function EditAccount() {
    const { userId, name, setName, userEmail, setUserEmail } = useContext(AuthContext)

    const [newUserName, setNewUserName] = useState("")
    const [newUserEmail, setNewUserEmail] = useState("")
    console.log("newUserName:", newUserName)
    console.log("newUserEmail:", newUserEmail)


    const submitHandler = async (e) => {
        e.preDefault()
        const userData = {
            name: newUserName,
            email: newUserEmail
        };
        const options = {
            method: "PUT",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        };
        const response = await fetch('http://localhost:5000/users/' + userId, options);
        const data = await response.json();
        console.log("data:", data)

        if (data.success) {
            alert("Your account data was edit successful.")
        }
        else {
            alert("Your account date was not updated. Please check if all input data is correct.")
        }
    }


    return (
        <div className="edit-account">
            <h2>Edit Data</h2>
            <form onSubmit={submitHandler}>
                <input type="text"
                    name="name"
                    placeholder="* Enter Your First name or Nickname"
                    minLength="2"
                    maxLength="25"
                    id="name"
                    value={newUserName}
                    onChange={(e) => { setNewUserName(e.target.value) }}

                />
                <input type="email"
                    name="email"
                    placeholder="* Enter Email"
                    id="email"
                    value={newUserEmail}
                    onChange={(e) => { setNewUserEmail(e.target.value) }}
                />
                <button type="submit">Edit</button>
            </form>
        </div>
    )
}
