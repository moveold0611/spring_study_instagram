import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { authenticate } from '../apis/api/account';


function AuthRoute({ element }) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/account"];
    


    //ver1
        useEffect(() => {
            // const response = await authenticate();
            // authenticate().then(response => {
                // if(localStorage.getItem("accessToken")) {
                //     window.location.replace("/");
                // }
            // }).catch(error => {
            //     alert(error.response.data)
                // navigate("/account/login")
            // })
        }, []);

        return element;
        }


    //ver2
        // useEffect(() => {
        //     // const response = await authenticate();
        //     authenticate().then(response => {
        //         setAuthenticated(response.data);
        //         for(let path of permitAllPath) {
        //             if(pathname.startsWith(path)) {
        //                 if(authenticated) {
        //                     navigate("/")
        //                 }
        //             }
        //         }
        //     })
        //     .catch(error => {
        //         alert(error.response.data)
        //         setAuthenticated(false);                    
        //         if(!authenticated) {
        //             navigate("/account/login")
        //         }
        //     })
        // }, [authenticated]);

        //     return element;
        // }

export default AuthRoute;