import React, { useEffect, useState } from 'react';
import SignInAndUpLayout from '../../components/Layouts/SignInAndUpLayout/SignInAndUpLayout';
import Top from '../../components/Layouts/SignInAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SignInAndUpLayout/Input/Input';
import OrBar from '../../components/Layouts/SignInAndUpLayout/OrBar/OrBar';
import { useNavigate } from 'react-router';

function Signin(props) {
    const navigate = useNavigate();
    const emptyAccount = {
        phoneAndEmailAndUsername : "",
        password : ""
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


    return (
        <div>
        <SignInAndUpLayout>
            <Top>
                <Input name={"phoneAndEmailAndUsername"} placeholder={"폰 이메일 기타 머시기"} changeAccount={changeAccount}/>
                <Input type={"password"} name={"password"} changeAccount={changeAccount} placeholder={"비번"}/>
                <button disabled={isAccountValuesEmpty}>로그인</button>
                <OrBar/>
                <div>
                    kakao로 로그인
                </div>
            </Top>
        </SignInAndUpLayout>
        </div>
    );
}

export default Signin;