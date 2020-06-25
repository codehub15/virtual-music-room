import React from 'react'

export default function Support() {
    return (
        <div className="support-container">
            <h2 className="heading">Welcome to our tech support</h2>
            <p>Please tell us how we can help, send your request to us.</p>

            <form>
                <input type="text" name="support-user-email" placeholder="* Email" required />
                <input type="text" name="support-user-subject" placeholder="* Subject" required />
                <textarea name="support-user-msg" placeholder="* Message" cols="25" rows="5" required></textarea>
                <input type="submit" value="send" class="btn-style" />
            </form>
        </div>
    )
}
