import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { GoHomeFill, GoHome } from 'react-icons/go'
import { FiSearch, FiInstagram } from 'react-icons/fi'

import { TiCompass } from 'react-icons/ti'
import { AiFillPlusSquare, AiOutlinePlusSquare } from 'react-icons/ai'
import { useNavigate } from 'react-router';
import NavItem from './NavItem/NavItem';

function Sidebar(props) {

    const [ isSelectedList, setIsSelectedList ] = useState([true, false, false, false]);


    const handleHomeClick = () => {
        setIsSelectedList([true, false, false, false])
    }
    const handleSearchClick = () => {
        setIsSelectedList([false, true, false, false])
    }
    const handleAddContentClick = () => {
        setIsSelectedList([false, false, true, false])
    }
    const handleProfileClick = () => {
        setIsSelectedList([false, false, false, true])
    }
    const handleCompassClick = () => {
        setIsSelectedList([false, false, false, false])
    }
    
    return (
        <div css={S.SLayout}>
            <NavItem onclick={handleHomeClick}><FiInstagram/></NavItem>
            <NavItem onclick={handleHomeClick}>{isSelectedList[0] ? < GoHomeFill/> : <GoHome/>}</NavItem>
            <NavItem onclick={handleSearchClick}><FiSearch/></NavItem>
            <NavItem onclick={handleAddContentClick}>{isSelectedList[2] ? <AiFillPlusSquare/>:<AiOutlinePlusSquare/>}</NavItem>
            <NavItem onclick={handleProfileClick}><TiCompass/></NavItem>
        </div>
    );
}

export default Sidebar;