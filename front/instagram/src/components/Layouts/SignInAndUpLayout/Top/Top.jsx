import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import logoImg from '../../../../assets/logo_main_2.png'

function Top({ children }) {
    return (
        <div css={S.SLayout}>
            <div css={S.SLogoBox}>
                <img css={S.SLogoImg} src={logoImg}/>
                {/* <i css={S.SCopyedLogo}/> */}
            </div>
            {children}
        </div>
    );
}


export default Top;



