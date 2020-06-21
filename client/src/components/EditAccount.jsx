import React, { useState, useContext, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import AuthContext from '../context/authContext'


export default function EditAccount() {
    const { isLoggedIn, token } = useContext(AuthContext)
    const [user, setUser] = useState()
    const [isEdit, setIsEdit] = useState(false)
    const [msg, setMsg] = useState("")

    useEffect(() => {
        fetch("http://localhost:5000/users/currentUser", {
            headers: {
                'x-auth': token,
            },
        })
            .then(res => res.json())
            .then(data => {
                setUser(data.user)
            })
    }, [token])

    const submitHandler = async (e) => {
        e.preventDefault()
        const options = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'x-auth': token,
            },
            body: JSON.stringify(user)
        };
        const response = await fetch('http://localhost:5000/users/' + user._id, options);
        const data = await response.json();

        if (data.success) {
            setMsg("Your account data was edit successful.")
            setIsEdit(true)
        }
        else {
            setMsg("Your account date was not updated. Please check if all input data is correct.")
            setIsEdit(false)
        }
    }

    // overwrite the passed values on the user
    const setUserField = (values) => setUser({
        ...user,
        ...values,
    });

    if (!user) {
        return "Loading";
    }

    return (
        <div className="edit-account-container">
            {isLoggedIn ?
                (<div className="edit-account">
                    <h2 className="heading">Edit Profile Data</h2>
                    {!isEdit ?
                        (<form onSubmit={submitHandler}>
                            <label>
                                <span className="edit-data">Name:</span>
                                <input type="text"
                                    name="name"
                                    placeholder="Update first name/nickname"
                                    minLength="2"
                                    maxLength="25"
                                    value={user.name}
                                    onChange={(e) => setUserField({ name: e.target.value })}
                                />
                            </label>
                            <label>
                                <span className="edit-data">Email:</span>
                                <input type="email"
                                    name="email"
                                    placeholder="Update email"
                                    id="email"
                                    value={user.email}
                                    onChange={(e) => setUserField({ email: e.target.value })}
                                />
                            </label>
                            <label>
                                <span className="edit-data">Level:</span>
                                <input type="text"
                                    name="level"
                                    placeholder="Level"
                                    value={user.level}
                                    onChange={(e) => setUserField({ level: e.target.value })}
                                />
                            </label>

                            <button type="submit" className="btn-style btn-edit">save changes</button>
                        </form>)
                        : (<div className="msg"><p>{msg}</p></div>)
                    }
                </div>
                ) : (<Redirect to="/" />)
            }
        </div>
    )
}
