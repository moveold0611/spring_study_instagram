import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import SignInAndUpLayout from '../../components/Layouts/SignInAndUpLayout/SignInAndUpLayout';
import Top from '../../components/Layouts/SignInAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SignInAndUpLayout/Input/Input';
import OrBar from '../../components/Layouts/SignInAndUpLayout/OrBar/OrBar';
import { signup } from '../../apis/api/account';
import * as S from './Style';
import { SiKakaotalk } from "react-icons/si"
import { useNavigate } from 'react-router';

function Signup(props) {
    const navigate = useNavigate();
    const emptyAccount = {
        phoneOrEmail : "",
        name : "",
        username : "",
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

    const handleSignupSubmit = async () => {
        try {
            const response = await signup(account);
            navigate("/account/login")
        } catch (error) {
            const responseErrorMessage = error.response.data;
            const keys = Object.keys(responseErrorMessage);
            if(keys.includes("username")) {
                setErrorMessage(responseErrorMessage.username)
            }else if(keys.includes("phoneOrEmail")) {
                setErrorMessage(responseErrorMessage.phoneOrEmail)
            }else if(keys.includes("name")) {
                setErrorMessage(responseErrorMessage.name)
            }else if(keys.includes("password")) {
                setErrorMessage(responseErrorMessage.password)
            }   
        }        
    }

    return (
    <SignInAndUpLayout>
        <Top>
            <div>
                <div>
                    친구들의 사진과 동영상을 보려면 가입하세요.
                </div>
                <button css={S.SKakaoBtn}>
                    <div css={S.SKaKaoIconBox}>
                        <SiKakaotalk />
                    </div>
                    kakao로 로그인
                </button>
                <OrBar/>
                <Input placeholder={"휴대폰 번호 또는 이메일 주소"} changeAccount={changeAccount} name={"phoneOrEmail"}/>
                <Input placeholder={"성명"} changeAccount={changeAccount} name={"name"}/>
                <Input placeholder={"사용자 이름"} changeAccount={changeAccount} name={"username"}/>
                <Input type={"password"} placeholder={"비밀번호"} changeAccount={changeAccount} name={"password"}/>
                <span>저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있고 아닐 수도 있죠. 더 알아보기</span>
                <div css={S.SSingupBtnBox}>
                    <button css={S.SSigupBtn} disabled={isAccountValuesEmpty} onClick={handleSignupSubmit}>가입</button>
                </div>
                <div>
                    {errorMessage}
                </div>
            </div>
        </Top>
    </SignInAndUpLayout>
    );
}

export default Signup;