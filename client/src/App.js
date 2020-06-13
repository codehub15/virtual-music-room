import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './style/App.scss'
import './style/Bootstrap.scss'
import './style/Playlist.scss'
import Routes from './Routes'
import Navbar from './components/Navbar'
import AuthContext from './context/authContext'


function App() {
    const [token, setToken] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [cookies, setCookies] = useState(false)
    const [userId, setUserId] = useState(null)
    const [name, setName] = useState(null)
    const [userEmail, setUserEmail] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)
    const [allMusicians, setAllMusicians] = useState([])
    const [clickProfile, setClickProfile] = useState(false)
    const [userData, setUserData] = useState({})


    return ( <
        AuthContext.Provider value = {
            {
                token,
                setToken,
                isLoggedIn,
                setIsLoggedIn,
                userId,
                setUserId,
                name,
                setName,
                userEmail,
                setUserEmail,
                userData,
                setUserData,
                allMusicians,
                setAllMusicians,
                clickProfile,
                setClickProfile,
                isAdmin,
                setIsAdmin
            }
        } >
        <
        BrowserRouter >
        <
        div className = "App" >
        <
        Navbar / >
        <
        div className = "app-container" >
        <
        Routes / >
        <
        /div> < /
        div > <
        /BrowserRouter> < /
        AuthContext.Provider >
    );
}

export default App;