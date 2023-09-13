import { Link } from "react-router-dom"
import Nav from "./Nav"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const HomeUser = () => {

    const mockEmployees = [
        {
          id: 0,
          name: "mock",
          lastname: "mocklastname",
          position: "Manager *Cant del",
        },
        {
          id: 1,
          name: "employee 1",
          lastname: "em",
          position: "Engineer *Cant del",
        },
        {
          id: 2,
          name: "employee 2",
          lastname: "lord",
          position: "Designer *Cant del",
        },
      ];

      const [data, setData] = useState(mockEmployees);
      useEffect(() => {
        const getData = async () => {
          const response = await axios.get(
            "https://jsd5-mock-backend.onrender.com/members"
          );
          setData((prevdata) => {
            console.log(response.data);
            return [...response.data, ...prevdata];
          });
        };
        getData();
      }, []);
      console.log(data);
      
    return (
        <>
            <Nav />
            <div className="container">
                <h1>Generation Thailand <br />Home - User Sector</h1>
                <div>
                    <button><Link to={'/user'}>User Home Sector</Link></button>
                    <button><Link to={'/admin'}>Admin Home Sector</Link></button>
                </div>
            </div>


            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>sdgsgf</td>
                        <td>sfg</td>
                        <td>sgf</td>
                    </tr>
                    {data.map((item, key) => (
                        <tr key={key}>
                            <td>
                                {item.name}
                            </td>
                            <td >
                                {item.lastname}
                            </td>
                            <td>
                                {item.position}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default HomeUser