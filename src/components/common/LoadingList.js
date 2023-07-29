import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import styled from 'styled-components';

const LoadingBlock = styled.section`
    position: relative; top: -100px; z-index: 3000;
    padding: 20px 0 0 60px; margin-bottom: 50px;
    overflow: hidden;
    h2{ width: 500px; height: 35px; margin-bottom: 20px; background-color: #222; text-indent: -999em; }
    .swiper, swiper-container{ padding-top: 20px; }
    .swiper-slide{
        position: relative; transition: ease-in transform 0.2s;
        &:hover{
            transform: translateY(-15px);
        }
    }
    .swiper-slide .img_wrap{
        width: 100%; height: 17vw; border-radius: 5px; overflow: hidden;
        margin-bottom: 10px; background-color: #222;  
    }
    .swiper-slide img{
        display: block; width: 100%;
    }
    .swiper-slide figcaption{ 
        width: 100%; height: 26px; 
        background-color: #222; 
    }
    .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled{
        opacity: 0;
    }
    .swiper-button-next:after, .swiper-button-prev:after{ color: #fff; }
`;



function LoadingList({ tvingbests }) {
    //for문은 JSX에서 직접 사용할 수 없어서 따로 함수를 만들어야 함
    const repeatLoading = () => {
        let loadingArray = [];

        for(let i=0;i<10;i++){
            loadingArray.push(
                <SwiperSlide key={i}>
                    <figure>
                        <div className="img_wrap">
                        </div>
                        <figcaption></figcaption>
                    </figure>
                </SwiperSlide>
            );
        };
        return loadingArray;
    }

    return (
        <LoadingBlock>
            <h2>예시타이틀</h2>
            <Swiper
                slidesPerView={7.2}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
            >
                {
                    repeatLoading()
                }
            </Swiper>
        </LoadingBlock>
    );
}

export default LoadingList;