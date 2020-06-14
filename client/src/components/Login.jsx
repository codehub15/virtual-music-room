import React, { useState, useContext } from 'react'
import AuthContext from '../context/authContext'
import { Redirect } from 'react-router-dom';

export default function Login(props) {
    const { setIsLoggedIn, setToken, userId, setUserId } = useContext(AuthContext)

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

        if (data.success) {
            // store user id
            setToken(data.user.tokens.pop().token)
            let musicianId = data.user._id;
            setUserId(musicianId)
            setIsLoggedIn(true)
        } else {
            alert("wrong login data")
        }
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