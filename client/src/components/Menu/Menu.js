import React, {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";



import Home from "../Pages/Home/Home";
import Notification from "../Pages/Notification/Notification";
import Message from "../Pages/Message/Message";
import Bookmark from "../Pages/Bookmark/Bookmark";
import Profile from "../Pages/Profile/Profile";
import SignIn from "../Pages/SignIn/SignIn";



import CircularProgress from '@material-ui/core/CircularProgress';


import './Menu.scss';


const Menu = () => {
    const [statusAuth, setStatusAuth] = useState(undefined);
    const [login, setLogin] = useState("");

    useEffect( () => {

        Promise.all([
            fetch("http://127.0.0.1:8000/authentication/checkAuth", {
                method : "POST",
                credentials: 'include',
                headers : {
                    "Content-Type" : "apllication/json"
                }
            }).then(response => {
                return response.json();
            }).then( data => {
                return data.status;
            }),
            fetch("http://127.0.0.1:8000/userData/getLoginAuth",{
                method : "POST",
                credentials: 'include',
                headers : {
                    "Content-Type" : "apllication/json"
                }
            }).then( response => {
                return response.json();
            }).then( result => {
                if(result.status){
                    return result.login;
                } 
            })
        ]).then( result => {
            setStatusAuth((prev) => result[0]);
            setLogin((prev) => result[1]);
        })


        return () => {
            setStatusAuth(undefined);
            setLogin("");
        }

    }, []);


    const handleLogout = async () => {
        let response = await fetch("http://127.0.0.1:8000/authentication/logout", {
            method : "POST",
            credentials: 'include',
            headers : {
                "Content-Type" : "apllication/json"
            }
        })

        let logoutData = await response.json();

        setStatusAuth(() => {
            return !logoutData.status
        });
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/" render={ () => 
                    <SignIn statusAuth={statusAuth} setStatusAuth={setStatusAuth} setMenuLogin={setLogin}/>
                } />
              
                <CheckOnAuth path="/home" statusAuth={statusAuth}>
                    <Home handleLogout={handleLogout} login={login} />
                </CheckOnAuth>

                <CheckOnAuth path="/notification" statusAuth={statusAuth} >
                    <Notification login={login} />
                </CheckOnAuth>

                <CheckOnAuth path="/messages" statusAuth={statusAuth} >
                    <Message/>
                </CheckOnAuth>

                <CheckOnAuth path="/bookmarks" statusAuth={statusAuth} >
                    <Bookmark/>
                </CheckOnAuth>

                <CheckOnAuth path="/profile" statusAuth={statusAuth} >
                    <Profile/>
                </CheckOnAuth>
            </Switch>
        </Router>
    );
}


const CheckOnAuth = ({children, ...rest}) => {
    return(
        <Route {...rest} render={(location) => 
                (rest.statusAuth) ? children : 
                    (rest.statusAuth === undefined) ? <CircularProgress className="progress"></CircularProgress> :
                    <Redirect to="/"></Redirect>
        }>
        </Route>
    )
}

export default Menu;
