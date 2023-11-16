import axiosInstance from "../plugins/axios";
import { withRouter } from "react-router";
import { useState, useEffect } from 'react';


const User = (params) => {
    const [listUser, setListUser] = useState([])


    const getListUser = async () => {
        //console.log('getListUser');
        try {
            var result = await axiosInstance.get(`/users?page=1`);
            // console.log('result =>', result.data);

            if (result.data && result.status === 200) {
                setListUser(result.data.data)
            }

        } catch (error) {
            return {
                ok: false,
                // error: error.message
            }
        }
    }

    useEffect(() => {
        //call API
        getListUser();
        // console.log('Run use Effect');
    }, []);//useEffect only run one time

    return (
        <>
            <div>
                <ol>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <li key={index}><span>{item.first_name} {item.last_name}</span></li>
                            )
                        })
                    }
                </ol>
            </div>
        </>
    )
}

export default withRouter(User)