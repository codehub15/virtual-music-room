import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/authContext'


function SearchUser() {
    const { isLoggedIn, token } = useContext(AuthContext)

    const [searchValue, setSearchValue] = useState("")
    console.log("search:", searchValue)
    const [searchResult, setSearchResult] = React.useState("")
    const [allMusicians, setAllMusicians] = useState([])
    const [isFound, setIsFound] = useState(false)

    useEffect(() => {
        fetch("http://localhost:5000/users", {
            headers: {
                'x-auth': token,
            }
        })
            .then(res => res.json())
            .then(data => {
                setAllMusicians(data.users)
            })
    }, [token])


    console.log("allMusicians:", allMusicians);

    const userData = allMusicians && allMusicians.map((musician, i) => {
        if (musician.name.toLowerCase() === searchValue.toLowerCase()) {
            // if (musician.name.toLowerCase().indexOf(searchValue.toLowerCase() !== -1) {
            return (
                <div key={i} className="musician">
                    <h3>{musician.name}</h3>
                    <p>Level: {musician.level} </p>
                    <p>Role: {musician.role} </p>
                </div>
            )
        }
        else {
            console.log("user not found")
        }
    })

    console.log("userData:", userData)

    // const filterUser = userData.filter(user => {
    //     console.log("filter user:", user)
    //     // return user.name.toLowerCase().indexOf(searchValue.toLowerCase() !== -1)
    // })


    return (
        <div className="search-container">
            {isLoggedIn ? (
                <div>
                    <form>
                        <input type="search" name="search-user"
                            placeholder="search for a user..."
                            onChange={(e) => { setSearchValue(e.target.value) }}
                        />
                    </form>

                    <div className="user-found">
                        {userData}
                    </div>
                </div>
            ) : null
            }
        </div>
    )
}

export default SearchUser
