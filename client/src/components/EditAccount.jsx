import React, { useState, useContext, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import AuthContext from '../context/authContext'


export default function EditAccount() {
    const { isLoggedIn, setIsLoggedIn, userId, name, setName, userEmail, setUserEmail } = useContext(AuthContext)

    const [newUserName, setNewUserName] = useState("")
    const [newUserEmail, setNewUserEmail] = useState("")
    console.log("newUserName:", newUserName)
    console.log("newUserEmail:", newUserEmail)
    const [isEdit, setIsEdit] = useState(false)
    const [msg, setMsg] = useState("")


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
            // alert("Your account data was edit successful.")
            setMsg("Your account data was edit successful.")
            setIsEdit(true)
        }
        else {
            // alert("Your account date was not updated. Please check if all input data is correct.")
            setMsg("Your account date was not updated. Please check if all input data is correct.")
            setIsEdit(false)
        }
    }


    return (
        <div className="edit-account-container">
            {isLoggedIn ?
                (<div className="edit-account">
                    <h2>Edit Profile Data</h2>
                    {!isEdit ?
                        (<form onSubmit={submitHandler}>
                            <label>
                                <span className="edit-data">{name}:</span>
                                <input type="text"
                                    name="name"
                                    placeholder="Update first name/nickname"
                                    minLength="2"
                                    maxLength="25"
                                    id="name"
                                    value={newUserName}
                                    onChange={(e) => { setNewUserName(e.target.value) }}
                                />
                            </label>
                            <label>
                                <span className="edit-data">{userEmail}:</span>
                                <input type="email"
                                    name="email"
                                    placeholder="Update email"
                                    id="email"
                                    value={newUserEmail}
                                    onChange={(e) => { setNewUserEmail(e.target.value) }}
                                />
                            </label>
                            <button type="submit">Edit</button>
                        </form>)
                        : (<div className="msg"><p>{msg}</p></div>)
                    }
                </div>
                ) : (<Redirect to="/" />)
            }
        </div>
    )
}
