import { Link } from "react-router-dom"
import Nav from "./Nav"
import Pic from "../cat_cry.jpg"

const Owner =() =>{
    return(
        <>
            <Nav/>
            <div className="container">
                <h1>Padtaraya Chudchawinpond <br/>Group C - 26</h1>
                <img src={Pic}/>
                <div className="text-container">
                    <span>Short biography:</span> <br/>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum placeat impedit consequuntur architecto aspernatur pariatur quam laudantium quo nobis, laborum delectus mollitia deserunt sapiente nam, saepe hic quidem fuga similique.</span>
                </div>
            </div>
        </>
    )
}

export default Owner