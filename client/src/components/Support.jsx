import React, { useContext, useState } from 'react'
import AuthContext from '../context/authContext'


export default function Support() {
    const { userEmail } = useContext(AuthContext)
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [emailTxt, setEmailTxt] = useState("");


    const sendSupportEmail = async (e) => {
        e.preventDefault();
        const userData = {
            email,
            subject,
            emailTxt
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        };
        const response = await fetch('/support', options);
        const data = await response.json();
        console.log("support data:", data)

        if (data.success) {
            alert("email send")
        } else {
            alert("something went wrong")
        }
    }


    return (
        <div className="support-container">
            <h2 className="heading">Welcome to our tech support</h2>
            <p>Please tell us how we can help, send your request to us.</p>

            <form onSubmit={sendSupportEmail}>
                <input type="text" name="support-user-email" placeholder="* Email" value={userEmail} onChange={(e) => setEmail(e.target.value)} required />
                <input type="text" name="support-user-subject" placeholder="* Subject" onChange={(e) => setSubject(e.target.value)} required />
                <textarea name="support-user-msg" placeholder="* Message" cols="25" rows="5" onChange={(e) => setEmailTxt(e.target.value)} required></textarea>
                <button type="submit" className="btn-style">Send</button>
            </form>
        </div>
    )
}
