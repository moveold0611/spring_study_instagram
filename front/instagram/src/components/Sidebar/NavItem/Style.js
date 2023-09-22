import { css } from "@emotion/react";

export const SLayout = css`
    transition: all 0.1ms ease;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 48px;
    height: 48px;
    margin: 4px 0px;
    padding: 12px;
    font-size: 24px;
    cursor: pointer;
    &:active {
        background-color: #eee;
        font-size: 22px;
        color: #555;
    }
`