import React from "react";
import './Search.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {
    return (
        <div className="container">
            <input type="text" className="form-control text-center bg-transparent border-0 p-2" placeholder="Your location..."></input>
        </div>
    )
}

export default Search;