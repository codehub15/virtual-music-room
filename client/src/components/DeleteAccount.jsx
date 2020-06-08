import React, { useState, useContext } from 'react'
import AuthContext from '../context/authContext'


export default function DeleteAccount() {
    const { setIsLoggedIn, userId } = useContext(AuthContext)

    const [msg, setMsg] = useState("")
    const [deleted, setDeleted] = useState(false)

    function deleteAccount() {
        let confirmation = window.confirm("Do you really want to delete your account for ever?")

        if (confirmation) {
            setMsg(`Your account has been deleted. \nThank you for have been part of our community and you are welcome back any time!`)

            fetch("http://localhost:5000/users/" + userId, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(() => {
                    console.log('deleted');
                })

            setIsLoggedIn(false)
            setDeleted(true)
        }
        else {
            setMsg("Your account is still active.")
            setDeleted(false)
        }
    }

    return (
        <div>
            {!deleted ? (<div>
                <h4>Delete Account</h4>
                <button onClick={deleteAccount}>delete</button>

                <div className="msg"><p>{msg}</p></div>
            </div>
            ) : (
                    <div className="msg">
                        {msg.split("\n").map((i, key) => {
                            return <div key={key}><p>{i}</p></div>;
                        })}
                    </div>
                )
            }
        </div>
    )
}
