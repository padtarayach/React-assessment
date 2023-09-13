import Nav from "./Nav"
import { Link } from "react-router-dom"

const HomeAdmin = () => {
    return (
        <>
            <Nav />
            <div className="container">
                <h1>Generation Thailand <br/>Home - Admin Sector</h1>
                <div>
                    <button><Link to={'/user'}>User Home Sector</Link></button>
                    <button><Link to={'/admin'}>Admin Home Sector</Link></button>
                </div>
            </div>


            <div>Create User Here</div>

            <div className="input-container">
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Lastname"></input>
                <input type="text" placeholder="Position"></input>
                <button>Save</button>
            </div>


            <table>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>mock</td>
                    <td>mock</td>
                    <td>mock</td>
                    <td><button>Delete</button></td>
                </tr>
            </table>
        </>
    )
}

export default HomeAdmin