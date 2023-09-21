import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { GoHomeFill, GoHome } from 'react-icons/go'
import { FiSearch, FiInstagram } from 'react-icons/fi'
import { LuPlusSquare } from 'react-icons/lu'
import { TiCompass } from 'react-icons/ti'
import { AiFillPlusSquare, AiOutlinePlusSquare } from 'react-icons/ai'
import { useNavigate } from 'react-router';
import NavItem from './NavItem/NavItem';

function Sidebar(props) {
    const [ isSelectedList, useIsSelectedList ] = useState([true, false, false, false]);
    const navigate = useNavigate()

    const handleHomeClick = () => {
        useIsSelectedList([true, false, false, false])
    }
    const handleSearchClick = () => {
        useIsSelectedList([false, true, false, false])
    }
    const handleAddContentClick = () => {
        useIsSelectedList([false, false, true, false])
    }
    const handleProfileClick = () => {
        useIsSelectedList([false, false, false, true])
    }
    const handleCompassClick = () => {
        useIsSelectedList([false, false, false, false])
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