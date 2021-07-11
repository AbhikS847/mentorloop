import React from 'react';
import axios from 'axios';
import { useEffect,useState} from 'react';

const AllUsers = () => {

    const [state,setState] = useState({
        Fullname:"",
        Enrolled:false,
        Teacher:"",
        Interest:[],
        id:0,
    })

    const allUsers = async() =>{
        try{
            const data = await axios.get('http://localhost:5000/students');
            const res = await data.data;
            console.log(res);
        }
        catch(err){
            console.error(err);
        }
    }

    allUsers();

    return (
        <div>
            <h2 className="text-center">This shows all users</h2>
            <hr />
            <ul>
                <li>

                </li>
            </ul>
        </div>
    )
}

export default AllUsers
