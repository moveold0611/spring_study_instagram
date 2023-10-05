/** @jsxImportSource @emotion/react */
import * as S from './Style';
import React, { useState } from 'react';

function ModalHeader({ title, leftButton, rightButton }) {
    return (
        <div css={S.SLayout}>
            {leftButton}
            <h1>{title}</h1>
            {rightButton}
        </div>
    );
}

export default ModalHeader;