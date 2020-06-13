import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom';
import AuthContext from '../context/authContext'


export default function Register(props) {
    const { setIsLoggedIn, userId, setUserId } = useContext(AuthContext)

    const [name, setName] = useState(null)
    const [level, setLevel] = useState(null)
    // const [instruments, setInstruments] = useState([])
    // const [musicStyle, setMusicStyle] = useState([])
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null)
    const [role, setRole] = useState(null)


    const signUpHandler = async (e) => {
        e.preventDefault();
        const userData = {
            name,
            profileImgName: "https://cdn.pixabay.com/photo/2018/05/31/23/57/cranium-3445434_960_720.png",
            email,
            password,
            level,
            role
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        };
        const response = await fetch('http://localhost:5000/users', options);
        console.log("response data from register:", response)
        const data = await response.json();
        // console.log(response.headers.get("x-auth"))


        // show message with the register status to the user
        if (data.success) {
            alert("Your account was created successful.")
            // store user id
            let musicianId = data.user._id;
            setUserId(musicianId)
            setIsLoggedIn(true)
        }
        else {
            alert("Your account can not be created. Please check if all input data is correct.")
        }
    }

    console.log("level:", level)
    console.log("role:", role)

    return (
        <div className="form-container">
            {props.isLoggedIn ? (
                <Redirect to="/musicianAccount" userId={userId} />
            ) : (
                    <div>
                        <h2>Sign up</h2>
                        <form onSubmit={signUpHandler} className="register-form">
                            <input type="text" name="name" placeholder="* Enter Your First name or Nickname" required minLength="2" maxLength="25" onChange={(e) => { setName(e.target.value) }} />
                            <input type="email" name="email" placeholder="* Enter Email" required onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" name="password" placeholder="* Enter Password" required minLength="6" maxLength="20" onChange={(e) => { setPassword(e.target.value) }} />

                            <h4>Your Skills:</h4>
                            <label>
                                <input type="radio" name="level" value="Beginner"
                                    onChange={(e) => setLevel(e.target.value)}
                                />
                                <span>Beginner</span>
                            </label>
                            <label>
                                <input type="radio" name="level" value="Skilled"
                                    onChange={(e) => setLevel(e.target.value)}
                                />
                                <span>Skilled</span>
                            </label>
                            <label>
                                <input type="radio" name="level" value="Specialist"
                                    onChange={(e) => setLevel(e.target.value)}
                                />
                                <span>Specialist</span>
                            </label>
                            <label>
                                <input type="radio" name="level" value="Expert"
                                    onChange={(e) => setLevel(e.target.value)}
                                />
                                <span>Expert</span>
                            </label>

                            <h4>Your Expertise / Role:</h4>
                            <label>
                                <input type="radio" name="role" value="Musician"
                                    onChange={(e) => setRole(e.target.value)}
                                />
                                <span>Musician</span>
                            </label>
                            <label>
                                <input type="radio" name="role" value="Producer"
                                    onChange={(e) => setRole(e.target.value)}
                                />
                                <span>Producer</span>
                            </label>
                            <label>
                                <input type="radio" name="role" value="Sound Engineer"
                                    onChange={(e) => setRole(e.target.value)}
                                />
                                <span>Sound Engineer</span>
                            </label>

                            <button type="submit">Sign up</button>
                        </form>
                    </div>)
            }
        </div>
    )
}
