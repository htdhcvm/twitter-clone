import React, {useState, useEffect} from "react";
 
import {
    Redirect
} from "react-router-dom";

import "./FormSignUp.scss";

import TextField from '@material-ui/core/TextField';
import TwitterIcon from '@material-ui/icons/Twitter';


import DropDownSelect from "../DropDownSelect/DropDownSelect";

function daysArray( count ){
    let daysTmp = [];
    for(let i = 1; i <= count; i++) daysTmp.push(i);
    return daysTmp;
}


const FormSignUp = () => {
    const [nameLength, setNameLength] = useState(0);
    const [days, setDays] = useState(()=>daysArray(30));
    const [error, setError] =useState("");
    const [registrationStatus, setRegistrationStatus] = useState(false);



    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [year, setYear] =useState("");



    useEffect( () => {
        setTimeout( () => {
            setError("");
        }, 3000)
    }, [error]);

    const handleDayBirthday = (name, value) => {
        switch(name) {
            case "Month": {
                setMonth(value);

                switch(value){
                    case "January":
                    case "March":
                    case "May":
                    case "July":
                    case "August":
                    case "October":
                    case "December": {
                        setDays(() => daysArray(31));
                        break;
                    }
                    case "April":
                    case "June":
                    case "September":
                    case "November": {
                        setDays(() => daysArray(30));
                        break;
                    }

                    case "February": {
                        setDays(() => daysArray(29));
                        break;
                    }
                    default : {

                    }
                }

                break;
            }
            case "Day" : {
                setDay(value);
                break;
            }
            case "Year" : {
                setYear(value);
                break;
            }
            default : {
                        
            }
        }
    }

    const chechInput = (event) => {
        if(event.target.value.trim().length === 0) return showMessage({
            status : false,
            text : "Field have to fill"
        });
        if(event.target.parentNode.parentNode.dataset.type === "login") {
            return setLogin(event.target.value);
        } 
        return setPassword(event.target.value);
    }


    const showMessage = ({status, text}) => {
        if(!status) {
            // error
            setError(text.message);
        } else {
            // success
            setRegistrationStatus(true);
        }
    }

    const yearsList = [];

    for(let i = new Date().getFullYear(); i >= 1990 ; i--) {
        yearsList.push(i);
    }

   


    return(
        <form className="sign-in">
            <TwitterIcon className="sign-in__icon-twitter"></TwitterIcon>
            <h2 className="sign-in__title">Create your account</h2>
            <div className="form-group">
                <TextField data-type="login" className="sign-in__name" value={login} onBlur={ chechInput } onChange={ event => { 
                    if(event.target.value.length <= 50) {
                        setLogin(event.target.value);
                        setNameLength(event.target.value.length);
                    }
                }} id="outlined-basic" label="Phone, email, or username" variant="outlined" />
                <span>{nameLength}/50</span>
            </div>
            <div className="form-group">
                <TextField data-type="password" onBlur={ chechInput } className="sign-in__phone" id="outlined-basic" label="Password" variant="outlined" />
            </div>
            <div className="sign-in__date-birthday">
                <h3 className="sign-in__date-birthday__title">Date of birth</h3>
                <span className="sign-in__date-birthday__text">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</span>
                <div className="sign-in__date-birthday__items">
                    <DropDownSelect title="Month" handleDayBirthday={handleDayBirthday} data={["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]} value={month}/>
                    <DropDownSelect title="Day" handleDayBirthday={handleDayBirthday} data={days} value={day}/>
                    <DropDownSelect title="Year" handleDayBirthday={handleDayBirthday} data={yearsList} value={year}/>
                </div>
            </div>
            <button onClick={(e)=>{
                e.preventDefault();
                if(login.trim().length > 0 && password.trim().length > 0  && month.trim().length  > 0 ) {
                    fetch("http://127.0.0.1:8000/authentication/registration", {
                        method : "POST",
                        credentials: 'include',
                        headers : {
                            "Content-Type": "application/json"
                        },
                        body : JSON.stringify({
                            login : login,
                            password : password,
                            date : `${day}-${month}-${year}`
                        })
                    }).then( reponse => {
                        return reponse.json();
                    }).then(response => {
                        return showMessage(response);
                    })
                }
                
            }} className="sign-in__button">Sign in</button>
            <div className="error"><span>{error}</span></div>
            {
                registrationStatus 
                    ? <Redirect to="/user" />
                    : null
            }
        </form>
    )
}




export default FormSignUp;
