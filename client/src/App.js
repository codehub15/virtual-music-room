import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './style/App.scss'
import './style/Bootstrap.scss'
import './style/Playlist.scss'
import Routes from './private/Routes'
import Navbar from './components/private/Navbar'
import AuthContext from './context/authContext'
import Cookies from 'js-cookie'

const getIsLoggedIn = () => {
    const isLoggedIn = Cookies.get('isLoggedIn');

    if (!isLoggedIn || isLoggedIn === 'false') {
        return false;
    }

    return true;
}

function App() {
    const [token, saveToken] = useState(Cookies.get('token'))
    const [isLoggedIn, saveIsLoggedIn] = useState(getIsLoggedIn());
    const [userId, setUserId] = useState(null)
    const [name, setName] = useState(null)
    const [userEmail, setUserEmail] = useState(null)
    const [userCountry, setUserCountry] = useState("")
    const [isAdmin, setIsAdmin] = useState(false)
    const [userData, setUserData] = useState({})

    const setIsLoggedIn = (value) => {
        Cookies.set('isLoggedIn', value);

        saveIsLoggedIn(value);
    };

    const setToken = (value) => {
        Cookies.set('token', value);

        saveToken(value);
    };

    return (
        <AuthContext.Provider value={
            {
                token, setToken,
                isLoggedIn, setIsLoggedIn,
                userId, setUserId,
                name, setName,
                userEmail, setUserEmail,
                userCountry, setUserCountry,
                userData, setUserData,
                isAdmin, setIsAdmin
            }
        } >
            <BrowserRouter >
                <div className="App" >
                    <Navbar />
                    <div className="app-container" >
                        <Routes />
                    </div> </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;