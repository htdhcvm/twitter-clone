import React from "react";



import SearchIcon from '@material-ui/icons/Search';



import './Search.scss';

const Search = () => {
    return (
        <div className="search">
            <SearchIcon className="search__icon"> </SearchIcon>
            <input className="search__fields" placeholder="Search Twitter"></input>
        </div>
    );
}

export default Search;