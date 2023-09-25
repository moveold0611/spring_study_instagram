/** @jsxImportSource @emotion/react */
import { NAME, PASSWORD, PHONE_AND_EMAIL, USERNAME } from '../../../../constants/regex';
import * as S from './Style';
import React, { useEffect, useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im'

function Input({ type, placeholder, name, changeAccount }) {
    const [ isEmpty, setIsEmpty ] = useState(true);
    const [ inputValue, setInputValue ] = useState("");
    const [ inputState, setInputState ] = useState();

    const handelInputChange = (e) => {
        setInputValue(e.target.value)
        changeAccount(e.target.name, e.target.value)
    }
    
    const handleInputOnblur = (e) => {
        const value = e.target.value;
        let regex = null;
        switch(e.target.name) {
            case "phoneAndEmail": 
                regex = PHONE_AND_EMAIL;
                break;
            case "name":
                regex = NAME;
                break;
            case "username":
                regex = USERNAME;
                break;
            case "password": 
                regex = PASSWORD;
                break;
            default: regex = null;
        }

        if(!!regex && !regex.test(value)) {
            setInputState(<><ImCancelCircle/></>)
            return;
        // }else if(!!regex && regex.test(value)) {
        //     setInputState(<><BsCheckCircle/></>)
        // }else {
        //     setInputState("")
        }
    }

    const handelInputOnFocus = (e) => {
        setInputState("")
    }

    useEffect(() => {
        setIsEmpty(!inputValue)
    }, [inputValue]);

    return (
        <div css={S.SLayout}>
            <label css={S.SInput(isEmpty)}>
                <input type={type} name={name} 
                onChange={handelInputChange}
                onBlur={handleInputOnblur}
                onFocus={handelInputOnFocus}/>
                <span>{placeholder}</span>
            </label>
            <div css={S.SStateBox}>
                {inputState}
            </div>
        </div>
    );
}

Input.defaultProps = {
    type : "text",
    placeholder: "",
    name: ""
}

export default Input;