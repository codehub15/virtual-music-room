import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/authContext'
import imageWaves from "../img/waves.png"


function SearchUser() {
    const { isLoggedIn, token } = useContext(AuthContext)

    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = React.useState(null)
    const [allMusicians, setAllMusicians] = useState([])
    const [isFound, setIsFound] = useState(false)
    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        fetch("/users", {
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

    // const findUser = () => {

    let userData = allMusicians && allMusicians.map((musician, i) => {
        if (musician.name.toLowerCase() === searchValue.toLowerCase()) {
            // if (musician.name.toLowerCase().indexOf(searchValue.toLowerCase() !== -1) {
            // setIsFound(true)
            return (
                <div key={i} className="musician">
                    <span onClick={() => setShowDiv(false)}
                        className="close-user"
                    >
                        X
                    </span>
                    {<img src={musician.profileImage} alt="Profile" width="100" height="100" />}
                    <h3>{musician.name}</h3>
                    <p>Level: {musician.level} </p>
                    <p>Role: {musician.role} </p>
                    <p>Collaborations/Tracks uploaded</p>
                    <img src={imageWaves} alt="" width="230"/>
                
                </div>
            )
        }
        else {
            // setIsFound(false)
            console.log("user not found")
        }
    })
    // }

    // console.log("userData:", userData)


    return (
        <div className="search-container">
            {isLoggedIn ? (
                <div>
                    <form>
                        <input type="search" name="search-user"
                            placeholder="search for a user..."
                            onChange={(e) => { setSearchValue(e.target.value) }}
                            onClick={() => setShowDiv(true)}
                        />
                    </form>


                    {showDiv && <div className="user-found">
                        {userData}
                    </div>
                    }

                    {/**    {isFound ? (  ) : null}  */}

                </div>
            ) : null}
        </div>
    )
}

export default SearchUser
