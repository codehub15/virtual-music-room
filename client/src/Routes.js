import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthContext from './context/authContext'
import ErrorPage from './components/ErrorPage'
import Home from './components/Homepage'
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import Musicians from './components/Musicians'
import MusicianAccount from './components/MusicianAccount'
import MusicianProfile from './components/MusicianProfile'


export default function Routes() {
    const { isLoggedIn, setIsLoggedIn, clickProfile } = useContext(AuthContext)

    return (
        <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/signup"
                render={(props) =>
                    <Register
                        {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
                    />}
            />

            <Route path="/login"
                render={(props) =>
                    <Login
                        {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
                    />}
            />

            <Route exact path="/logout" component={Logout} />

            <Route path="/musicianAccount"
                render={(props) =>
                    <MusicianAccount
                        {...props}
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                    />}
            />

            <Route exact path="/musicians" component={Musicians} />

            {clickProfile ?
                <Route exact path="/profile" component={MusicianProfile} />
                : null
            }

            <Route component={ErrorPage} />
        </Switch>
    )
}