import { Navigate, useLocation } from 'react-router-dom';
import { authenticate } from '../apis/api/account';
import { useQuery } from 'react-query';
import Loading from '../components/Loading/Loading';

function AuthRoute({ element }) {
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/account"];
    //     window.location.replace("/"); 새로고침

    const authenticateState
        = useQuery(["authenticate"], authenticate, {
            retry: 0,
            refetchOnWindowFocus: false
        }); // useQuery는 모두 get요청


    if(authenticateState.isLoading) {
        // console.log("로딩중...")
        return <Loading />
    }

    if(authenticateState.isError) {
        for(let path of permitAllPath) {
            if(pathname.startsWith(path)) {
                return element;
            }
        }
        return <Navigate to={"/account/login"}/>
    }

    for(let path of permitAllPath) {
        if(pathname.startsWith(path)) {
            return <Navigate to={"/"}/>
        }
    }

    
    return element;
}
export default AuthRoute;