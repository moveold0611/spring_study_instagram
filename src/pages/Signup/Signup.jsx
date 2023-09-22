import React, { useEffect, useState } from 'react';
import SignInAndUpLayout from '../../components/Layouts/SignInAndUpLayout/SignInAndUpLayout';
import Top from '../../components/Layouts/SignInAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SignInAndUpLayout/Input/Input';
import OrBar from '../../components/Layouts/SignInAndUpLayout/OrBar/OrBar';

function Signup(props) {
    const emptyAccount = {
        phoneAndEmail : "",
        name : "",
        username : "",
        password : ""
    }
    const [ account, setAccount ] = useState(emptyAccount);
    const [ isAccountValuesEmpty, setIsAccountValuesEmpty ] = useState(true);

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
    <SignInAndUpLayout>
        <Top>
            <div>
                <div>
                    친구들의 사진과 동영상을 보려면 가입하세요.
                </div>
                <button>
                    Kakao로 로그인
                </button>
                <OrBar/>
                <Input placeholder={"휴대폰 번호 또는 이메일 주소"} changeAccount={changeAccount} name={"phoneAndEmail"}/>
                <Input placeholder={"성명"} changeAccount={changeAccount} name={"name"}/>
                <Input placeholder={"사용자 이름"} changeAccount={changeAccount} name={"username"}/>
                <Input type={"password"} placeholder={"비밀번호"} changeAccount={changeAccount} name={"password"}/>
                <button disabled={isAccountValuesEmpty}>가입</button>
            </div>
        </Top>
    </SignInAndUpLayout>
    );
}

export default Signup;