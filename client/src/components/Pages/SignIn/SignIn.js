import React, {useState, useEffect} from "react";

import './SignIn.scss';


import {
    Redirect
} from "react-router-dom";


import LogIn from "../../Buttons/BtnLogIn/BtnLogIn";
import SignUp from "../../Buttons/BtnSignUp/BtnSignUp";


import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import TextField from '@material-ui/core/TextField';

const SignIn = ({statusAuth, setStatusAuth, setMenuLogin}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    
    // const [signInStatus, setSignInStatus] = useState(false);
    
    const [formToggle, setFormToggle] = useState(false);
    const [error, setError] = useState("")


    const handleToggleForm = (event) => {
        event.preventDefault();
        setFormToggle((prev) => !prev);
    }

    useEffect( () => {
        const handlerClickMouse = (event) => {
            if(event.target.classList.value === "SignIn__hidden") setFormToggle(false)
        }

        document.addEventListener("mousedown", handlerClickMouse);

        return () => {
            document.removeEventListener("mousedown", handlerClickMouse);
        }

    }, [formToggle])


    useEffect( () => {
        setInterval(() => {
            setError("");
        }, 5000)
    }, [error])


    const handleAuthorization = (event) => {
        event.preventDefault();
        if(login.trim().length > 0 && password.trim().length > 0) {
            return fetch("http://127.0.0.1:8000/authentication/authorization", {
                method : "POST", 
                credentials: 'include',
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    login : login,
                    password : password
                })
            }).then( response => {
                return response.json();
            }).then( data => {
                if(!data.status) setError(data.text.message);
                setMenuLogin( (prev) => prev = login);
                setStatusAuth( (prev) => data.status);
                
            })
        }

        console.log("Fill fileds");
    }
    return (
        <section className="SignIn">
            {formToggle
                ? <div className="SignIn__hidden"></div>
                : null}
            
            <div className="SignIn__left">
                <svg viewBox="0 0 24 24" className="SignIn__left-icon">
                    <g>
                        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                    </g>
                </svg>
                <div className="info">
                    <div className="info__item">
                        <SearchIcon className="info__item-icon"></SearchIcon><span className="info__item-text">Follow your interests.</span>
                    </div>
                    <div className="info__item">
                        <PeopleOutlineIcon className="info__item-icon"></PeopleOutlineIcon><span className="info__item-text">Hear what people are talking about.</span>
                    </div>
                    <div className="info__item">
                        <ChatBubbleOutlineIcon className="info__item-icon"></ChatBubbleOutlineIcon><span className="info__item-text">Join the conversation.</span>
                    </div>
                </div>
            </div>
            <div className="SignIn__right">
                <div className="SignIn__right-wrapper">
                    <TwitterIcon className="SignIn__right-icon-twitter"></TwitterIcon>
                    <h1 className="SignIn__right-title">See what’s happening in the world right now</h1>
                    <form className="SignIn__right-form">
                        <TextField onChange={(e) => setLogin(e.target.value)} className="SignIn__right-input-value" id="outlined-basic" label="Phone, email, or username" variant="outlined" />
                        <TextField onChange={(e) => setPassword(e.target.value)} className="SignIn__right-input-value" id="outlined-basic" label="Password" variant="outlined" />
                        <LogIn handleAuthorization={handleAuthorization}></LogIn>
                        <div className="error"><span>{error}</span></div>
                    </form>
                    <h4>Join Twitter today.</h4>
                    <SignUp 
                        formToggle={formToggle}
                        handleToggleForm={handleToggleForm}    
                    ></SignUp>
                </div>
            </div>
            {
                statusAuth 
                    ? <Redirect to="/home" />
                    : null
            }
        </section>
    );
}


export default SignIn;
