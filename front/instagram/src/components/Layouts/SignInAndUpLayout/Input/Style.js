import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    width: 268px;
    height: 38px;
    margin: 0px 40px 6px;
    background-color: #fafafa;
`;

export const SInput = (isEmpty) => css`
    display: flex;
    position: relative;
    flex-grow: 1;
    padding: ${isEmpty ? "9px 0px 7px 8px": "14px 0px 2px 8px"};
    transition: all 0.1s ease;

    & > input {
        border: none;
        outline: none;
        background-color: transparent;
        height: 20px;
    }
    & > span {
        transform: translateY(-70%);
        position: absolute;
        top: ${isEmpty ? "50%" : "25%"};
        left: 5px; 
        font-size: ${isEmpty ? "12px" : "10px"};
        color: #555;
        transition: all 0.1s ease;
    }
`;

export const SStateBox = css`
    padding: 0px 8px;
    background-color: #fafafa;
`;

