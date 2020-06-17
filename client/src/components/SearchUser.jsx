import React from 'react'


function SearchUser() {
    return (
        <div className="search-container">
            <form>
                <input type="search" name="search-user"
                placeholder="search for a user..."
                />
            </form>
        </div>
    )
}

export default SearchUser
