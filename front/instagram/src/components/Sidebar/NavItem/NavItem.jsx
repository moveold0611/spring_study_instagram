import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';


function NavItem({ children, onclick }) {

    return (
        <div css={S.SLayout} onClick={onclick}>
            {children}
        </div>
    );
}

export default NavItem;