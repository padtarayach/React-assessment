import { Link } from "react-router-dom"
import Nav from "./Nav"
import React, { useEffect, useState } from "react";

const HomeNormal =() =>{
    return(
        <>
            <Nav/>

            <div className="container">
                <h1>Generation Thailand <br/>React - Assessment</h1>
                    <div>
                    <button><Link to={'/user'}>User Home Sector</Link></button>
                    <button><Link to={'/admin'}>Admin Home Sector</Link></button>
                    </div>
            </div>
        </>
    )
}

export default HomeNormal