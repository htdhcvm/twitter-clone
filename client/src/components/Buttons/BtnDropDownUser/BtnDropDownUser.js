import React, {useState, useEffect} from "react";

import './BtnDropDownUser.scss';

import BtnDropDownItem from "../BtnDropDownItem/BtnDropDownItem";


import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const BtnDropDownUser = ({handleLogout, login}) => {
    const [updown, setUpdown] = useState(false);

    return (
        <div className="BtnDropDownUser">
            <div onClick={() => {
                setUpdown(prev => !prev)
            }} className="BtnDropDownUser__info">
                    <div className="BtnDropDownUser__info-right">
                        <PermIdentityIcon></PermIdentityIcon>
                        <div className="BtnDropDownUser__info-username">
                            <span className="BtnDropDownUser__info-bold">{login}</span>
                            <br></br>
                            <span className="BtnDropDownUser__info-at">@{login}</span>
                        </div>
                    </div> 
                <ExpandMoreIcon />
            </div>
            {
                (updown)
                    ? 
                        (
                            <div className="BtnDropDownUser__up-down">
                                <div className="BtnDropDownUser__up-down-info">
                                    <div className="BtnDropDownUser__info-right">
                                        <PermIdentityIcon></PermIdentityIcon>
                                        <div className="BtnDropDownUser__info-username">
                                            <span className="BtnDropDownUser__info-bold">{login}</span>
                                            <br></br>
                                            <span className="BtnDropDownUser__info-at">@{login}</span>
                                        </div>
                                    </div> 
                                </div>
                                <BtnDropDownItem handleLogout={handleLogout}/>
                            </div>
                        )
                    :null
            }
        </div>
    );
}

export default BtnDropDownUser;
