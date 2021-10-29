import React, { useEffect, useState } from 'react';

const APIData = () => {

    const [data, setData] = useState([]);

    const getPrductInfo = async () => {
        const res = await fetch('https://reqres.in/api/users?page=2');
        const actualData = await res.json();
        console.log(actualData.data);
        setData(actualData.data);
    }

    useEffect(() => {
        getPrductInfo();
    }, []);
    return (

        <div class="container">
            <br /> <br />
            <h1>User details</h1>
            <br /> <br />
            <table class ="table-striped mx-auto table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((curElem, ind) => {
                            return (

                                <tr>
                                    <td>{curElem.id}</td>
                                    <td>{curElem.email}</td>
                                    <td>{curElem.first_name}</td>
                                    <td>{curElem.last_name}</td>
                                   
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>


        </div>

    );
    
}

export default APIData;