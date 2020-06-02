import React, { useState, useContext } from 'react'
import AuthContext from '../context/authContext'
import { Redirect } from 'react-router-dom';


export default function Login(props) {
    const { setIsLoggedIn, token, setToken, userId, setUserId } = useContext(AuthContext)

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    const loginHandler = async (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        };
        const response = await fetch('http://localhost:5000/users/login', options);
        const data = await response.json();
        // console.log('data response:', data);
        // setToken(data.token)

        // store user id
        let musicianId = data.user._id;
        setUserId(musicianId)

        if (data.success) {
            setIsLoggedIn(true)
            // setToken(data.token)
        } else {
            alert("wrong login data")
        }
        // console.log("headers x-auth:", response.headers.get("x-auth"))
    }


    return (
        <div className="form-container">
            {props.isLoggedIn ? (
                <Redirect to="/musicianAccount" userId={userId} />
            ) : (
                    <div>
                        <h2>Login</h2>
                        <form onSubmit={loginHandler}>
                            <input type="text" name="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required />
                            <input type="password" name="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required />

                            <button type="submit">Login</button>
                        </form>
                    </div>
                )
            }
        </div>
    )
}