/** @jsxImportSource @emotion/react */
import * as S from './Style';
import React from 'react';

function ModalBody({ children }) {
    return (
        <div css={S.SLayout}>
            {children}
        </div>
    );
}

export default ModalBody;