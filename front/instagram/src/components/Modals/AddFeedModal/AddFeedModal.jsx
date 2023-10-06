/** @jsxImportSource @emotion/react */
import ModalBody from '../ModalBody/ModalBody';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalLayout from '../ModalLayout/ModalLayout';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as S from './Style';
import React, { useEffect, useRef, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { HiArrowNarrowLeft } from 'react-icons/hi'
import profileImg from '../../../assets/logo192.png'
import { uploadFeed } from '../../../apis/api/feed';

function SelectFeedImg({ setFiles, setPage }) {
    // 페이지 1
    const fileInputRef = useRef();
    const handelSelectImg = () => {
        fileInputRef.current.click();
    }
    const handleImgFileChange = (e) => {
        setFiles(e.target.files);
        setPage(2);
    }
    return (
        <div css={S.SelectFeedImgContainer}>

            <svg onClick={handelSelectImg} 
            aria-label="이미지나 동영상과 같은 미디어를 나타내는 아이콘" 
            className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" 
            fill="rgb(0, 0, 0)" height="77" 
            role="img" viewBox="0 00 97.6 77.3" 
            width="96">
                <title>
                    이미지나 동영상과 같은 미디어를 나타내는 아이콘
                </title>
                <path d="M16.3 24h.3c2.8-.2 4.9-2.6 
                4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 
                2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 
                4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 
                3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 
                0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" 
                fill="currentColor"></path>
                <path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 
                6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 
                10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 
                10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 
                9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 
                4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 
                49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 
                1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 
                34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" 
                fill="currentColor"></path>
                <path d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 
                2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 
                3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 
                1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" 
                fill="currentColor">
                </path>
            </svg>

           <input accept='image/gif, image/jpeg, image/jpg, image/png'
           css={S.SFileInput} 
           type='file' multiple={true}
           name="file" 
           ref={fileInputRef}
           onChange={handleImgFileChange}>
           </input>
        </div>
    )
}

function ReviewFeedImg({ files }) {
    // 페이지 2
    const [ imgs, setImgs ] = useState([]);

    useEffect(() => {
        const filesArray = Array.from(files);
        const promises = filesArray.map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader(); // 데이터 뽑아내기
                reader.onload = (e) => {
                    resolve(e.target.result)
                }
                reader.readAsDataURL(file);
                reader.onerror = reject;
            })
        })
        Promise.all(promises)
        .then(result => {
            setImgs(result);
        })
        .catch(error => {
            console.log(error)
        })
    }, []);

    return (
        <div css={S.SReviewContainer}>
            <Carousel 
            showArrows={true}
          autoPlay={false}
          infiniteLoop={false}
          showThumbs={false}>
                {imgs.map((img, index) => (
                    <div css={S.ImgBox} key={index}>
                        <img src={img} alt="" />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

function FeedDetaile({ isShow, setContent }) {

    useEffect(() => {

    }, [])
    
    const handleContentOnChange = (e) => {
        console.log(e.target.value)
        setContent(e.target.value);
    }

    return (
        <div css={S.FeedDetaileContainer(isShow)}>
            <div css={S.ProfileContainer}>
                <div css={S.ProfileImgBox}>
                    <img src={profileImg} alt=''/>
                </div>
                <div>moveold0611</div>
            </div>
            <div>
                <textarea placeholder='문구를 입력하세요..?' 
                css={S.FeedContent} name='content' onChange={handleContentOnChange}></textarea>
            </div>
        </div>
    )
}

function AbleFeed({ files, isShowFeedDetaile, content }) {
    return (
        <>
            <ReviewFeedImg files={files}/> 
            <FeedDetaile isShow={isShowFeedDetaile} setContent={content}/> 
        </>
    )
}

function AddFeedModal(props) {
    const [ page, setPage ] = useState(1);
    const [ bodyComponent, setBodyComponent ] = useState(<></>);
    const [ isShowFeedDetaile, setIsShowFeedDetaile ] = useState(false);
    const [ title , setTitle ] = useState();
    
    const [ leftButton, setLeftButton ] = useState(<div></div>);
    const [ rightButton, setRightButton ] = useState(<div></div>);
    
    const [ files, setFiles ] = useState([]);
    const [ content, setContent ] = useState("");



    const BackButton = () => {
        return (
            <div onClick={() =>{setPage(page - 1)}}>
                <HiArrowNarrowLeft/>
            </div>
        )
    }

    const NextButton = () => {
        return(
            <div onClick={() =>{setPage(page + 1)}}>
                <span>다음</span>
            </div>
        )
    }

    const SubmitButton = () => {
        const handleSubmitClick = async () => {
            const formData = new FormData();
            // 이미지는 서버에 json이 아닌 FormData로 전송
            formData.append("content", content);
            const fileArray = Array.from(files);
            fileArray.forEach(file => {
                formData.append("files", file)
            })
            try {
                const response = await uploadFeed(formData);                
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        return (
            <div onClick={handleSubmitClick}>
            <span>공유하기</span>
        </div>
        )
    }

    useEffect(() => {
        switch(page) {
            case 1:
                console.log(page)
                setTitle("새 게시물 만들기");
                setBodyComponent(<SelectFeedImg setFiles={setFiles} setPage={setPage}/>);
                setLeftButton(<div></div>);
                setRightButton(<div></div>);
                break;
            case 2: 
                console.log(page)
                setBodyComponent(<AbleFeed files={files} isShowFeedDetaile={isShowFeedDetaile} content={setContent} />);
                setTitle("미리보기");
                setIsShowFeedDetaile(false);
                setLeftButton(BackButton());
                setRightButton(NextButton());
                break;            
            case 3:
                console.log(page)
                setTitle("새 게시물 만들기");
                setBodyComponent(<AbleFeed files={files} isShowFeedDetaile={isShowFeedDetaile} content={setContent} />);
                setIsShowFeedDetaile(true);
                setLeftButton(BackButton);
                setRightButton(SubmitButton());
                break;
            default:
        }
    }, [page, isShowFeedDetaile, content]);

    return (
        <ModalLayout>
            <ModalHeader title={title} leftButton={leftButton} rightButton={rightButton}/>
            <ModalBody>
                {bodyComponent}
            </ModalBody>
        </ModalLayout>
    );
}

export default AddFeedModal;