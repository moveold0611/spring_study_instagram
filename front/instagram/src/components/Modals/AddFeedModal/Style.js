import { css } from "@emotion/react";

export const SelectFeedImgContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    width: 396px;
    height: 396px;
`;

export const SReviewContainer = css`
    width: 396px;
    height: 396px;
`;

export const ImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 396px;
    height: 366px;
    & > img {
        width: 100%;
    }
`;

export const SFileInput = css`
    display: none;
`;

export const FeedDetaileContainer = (isShow) => css`
    transition: all 1s ease;
    width: ${isShow ? "339px" : "0"};
    border-left: 1px solid #dbdbdb;
    height: 396px;
    opacity: ${isShow ? "1" : "0"};
    overflow: hidden;
`;

export const ProfileContainer = css`
    display: flex;
    align-items: center;
    padding: 0px 16px;
    width: 100%;
    height: 60px;
`;

export const ProfileImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 12px;
    overflow: hidden;

    & > img {
        width: 100%;
    }
`;

export const FeedContent = css`
    padding: 0px 16px;
    border: none;
    outline: none;
    resize: none;
    width: 100%;
    height: 300px;
    overflow-y: auto;
    /* scrollbar-color: ; */
`;