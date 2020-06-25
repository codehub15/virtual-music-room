import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthContext from './context/authContext'
import ErrorPage from './components/ErrorPage'
import Home from './components/Homepage'
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import Musicians from './components/Musicians'
import Projects from './components/Projects'
import SingleProject from './components/SingleProject'
import MusicianAccount from './components/MusicianAccount'
import MusicianProfile from './components/MusicianProfile'
import DeleteAccount from './components/DeleteAccount'
import EditAccount from './components/EditAccount'
import Services from './components/Services'
import Support from './components/Support'


export default function Routes() {
    const { isLoggedIn, setIsLoggedIn, token } = useContext(AuthContext)

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

            <Route path="/musicianAccount" render={(props) => <MusicianAccount {...props} />} />

            <Route exact path="/musicians" component={Musicians} />

            <Route exact path="/projects" component={Projects} />

            <Route exact path="/service" component={Services} />

            <Route exact path="/support" component={Support} />

            <Route
                path="/projects/:id"
                render={(props) => (
                    <SingleProject
                        {...props}
                        isLoggedIn={isLoggedIn}
                        token={token}
                    />
                )}
            />

            <Route exact path="/profile/:id" component={MusicianProfile} />

            <Route path="/edit-account"
                render={(props) =>
                    <EditAccount
                        {...props}
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                    />}
            />

            <Route path="/delete-account"
                render={(props) =>
                    <DeleteAccount
                        {...props}
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                    />}
            />

            <Route component={ErrorPage} />
        </Switch>
    )
}