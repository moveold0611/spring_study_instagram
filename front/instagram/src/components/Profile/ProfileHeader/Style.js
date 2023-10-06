import { css } from "@emotion/react";

export const HeaderContainer = css`
    display: flex;
    width: 100%;
    margin-bottom: 44px;
`;

export const ProfileImgOutBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 46px;
    margin-left: 16px;
    width: 166px;
    height: 166px;
    border: 2px solid #dbdbdb;
    border-radius: 50%;
`;

export const ProfileImgInBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;

    & > {
        width: 100%;
    }
`;

export const UserInfoTop = css`
    display: flex;
    align-items: center;

    & > * {
        margin-right: 10px;
    }
`;

export const UserInfoMid = css`
    display: flex;
    margin: 20px 0px;

    & > div span {
        margin-left: 10px;
        margin-right: 40px;
        font-weight: 600;
    }
`
