import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom';
import AuthContext from '../context/authContext'
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/scss/react-flags-select.scss';


export default function Register(props) {
    const { setIsLoggedIn, userId, setUserId, setToken } = useContext(AuthContext)

    const [name, setName] = useState(null)
    const [level, setLevel] = useState(null)
    // const [instruments, setInstruments] = useState([])
    // const [musicStyle, setMusicStyle] = useState([])
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null)
    const [role, setRole] = useState(null)
    const [country, setCountry] = useState(null);


    const signUpHandler = async (e) => {
        e.preventDefault();
        const userData = {
            name,
            profileImage: "https://cdn.pixabay.com/photo/2018/05/31/23/57/cranium-3445434_960_720.png",
            email,
            password,
            level,
            role,
            country
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
            alert("your account has been successfully created.")
            setToken(data.user.tokens.pop().token)
            // store user id
            let musicianId = data.user._id;
            setUserId(musicianId)
            setIsLoggedIn(true)
        }
        else {
            alert("Your account cannot be created. Please check if all input data is correct.")
        }
    }

    console.log("setCountry:", country)

    const onSelectFlag = (countryCode) => {
        console.log(countryCode)
        setCountry(countryCode)
    }

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

                            {/** location */}
                            <div className="country-selection-div">
                                <h4>Your Country</h4>
                                <ReactFlagsSelect
                                    defaultCountry="DE"
                                    searchable={true}
                                    className="country-selection"
                                    onSelect={onSelectFlag}
                                />
                            </div>

                            <div className="radio-btns">
                                {/** skills */}
                                <div className="inp-radio-btn skills">
                                    <h4>Your Skills:</h4>
                                    <input type="radio" name="level" value="Beginner" id="beginner"
                                        onChange={(e) => setLevel(e.target.value)}
                                    />
                                    <label htmlFor="beginner">Beginner</label>
                                    <br />
                                    <input type="radio" name="level" value="Skilled" id="skilled"
                                        onChange={(e) => setLevel(e.target.value)}
                                    />
                                    <label htmlFor="skilled">Skilled</label>
                                    <br />
                                    <input type="radio" name="level" value="Specialist" id="specialist"
                                        onChange={(e) => setLevel(e.target.value)}
                                    />
                                    <label htmlFor="specialist">Specialist</label>
                                    <br />
                                    <input type="radio" name="level" value="Expert" id="expert"
                                        onChange={(e) => setLevel(e.target.value)}
                                    />
                                    <label htmlFor="expert">Expert</label>
                                </div>
                                {/** role */}
                                <div className="inp-radio-btn role">
                                    <h4>Your Expertise / Role:</h4>
                                    <label>
                                        <input type="radio" name="role" value="Musician"
                                            onChange={(e) => setRole(e.target.value)}
                                        />
                                        <span>Musician</span>
                                    </label>
                                    <br />
                                    <label>
                                        <input type="radio" name="role" value="Producer"
                                            onChange={(e) => setRole(e.target.value)}
                                        />
                                        <span>Producer</span>
                                    </label>
                                    <br />
                                    <label>
                                        <input type="radio" name="role" value="Sound Engineer"
                                            onChange={(e) => setRole(e.target.value)}
                                        />
                                        <span>Sound Engineer</span>
                                    </label>
                                </div>
                            </div>

                            <button type="submit">Sign up</button>
                        </form>
                    </div>)
            }
        </div>
    )
}
