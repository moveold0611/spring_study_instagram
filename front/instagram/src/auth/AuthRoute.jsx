import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { authenticate } from '../apis/api/account';

function AuthRoute({ element }) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/account"];
    const [ authenticated, setAuthenticated ] = useState(false);

    useEffect(() => {
        // const response = await authenticate();
        authenticate().then(response => {
            setAuthenticated(response.data);
        }).catch(error => {
            alert(error.response.data)
            setAuthenticated(false);
        })
    }, []);

    for(let path of permitAllPath) {
        if(pathname.startsWith(path)) {
            if(authenticated) {
                return <Navigate to={"/"} />
            }
            return element;
        }
    }

    if(!authenticated) {
        return <Navigate to={"/account/login"} />;
    }

    return element;
}

export default AuthRoute;