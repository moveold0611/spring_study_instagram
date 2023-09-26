import React, { useEffect, useState } from 'react';
import SignInAndUpLayout from '../../components/Layouts/SignInAndUpLayout/SignInAndUpLayout';
import Top from '../../components/Layouts/SignInAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SignInAndUpLayout/Input/Input';
import OrBar from '../../components/Layouts/SignInAndUpLayout/OrBar/OrBar';
import { useNavigate } from 'react-router';
import { signin } from '../../apis/api/account';

function Signin(props) {
    const navigate = useNavigate();

    const emptyAccount = {
        phoneOrEmailOrUsername : "",
        loginPassword : ""
    }
    const [ account, setAccount ] = useState(emptyAccount);
    const [ isAccountValuesEmpty, setIsAccountValuesEmpty ] = useState(true);
    const [ errorMessage, setErrorMessage ] = useState("");

    const changeAccount = (name, value) => {
        setAccount({
            ...account,
            [name]: value
        })
    }


    useEffect(() => {
        setIsAccountValuesEmpty(Object.values(account).includes(""))
    }, [account])


    const handleSigninSubmit = async () => {
        console.log(account)
        try {
            await signin(account);            
        } catch (error) {
            setErrorMessage(error.response.data.errorMessage)
        }
    }


    return (    
        <div>
        <SignInAndUpLayout>
            <Top>
                <Input name={"phoneOrEmailOrUsername"} placeholder={"폰 이메일 기타 머시기"} changeAccount={changeAccount}/>
                <Input type={"password"} name={"loginPassword"} changeAccount={changeAccount} placeholder={"비번"}/>
                <button onClick={handleSigninSubmit} >로그인</button>
                <OrBar/>
                <div>
                    kakao로 로그인
                </div>
                <div>
                    {errorMessage}
                </div>
            </Top>
        </SignInAndUpLayout>
        </div>
    );
}

export default Signin;