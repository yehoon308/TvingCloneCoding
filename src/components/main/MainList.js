import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import styled from 'styled-components';

const MainBannerBlock = styled.main`
    width: 100%;
    .swiper-button-next:after, .swiper-button-prev:after{
        color: #fff; opacity: 0.5;
        transition: 0.2s;
    }
    .swiper-button-next:hover:after, .swiper-button-prev:hover:after{
        opacity: 1;
    }
    .swiper-slide{ position: relative; }
    p{
        position: absolute; left: 80px; bottom: 200px; z-index: 5500;
        font-size: 24px; font-weight: 500;
    }
    a{
        position: absolute; right: 80px; bottom: 150px; z-index: 5500;
        padding: 20px 50px; border: 1px solid rgba(255,255,255,0.5);
        border-radius: 5px; background-color: rgba(255,255,255,0.15);
        transition: 0.3s;
    }
    a:hover{
        border: 1px solid rgba(255,255,255,1); 
        background-color: rgba(255,255,255,0.3);
    }
    .swiper-pagination{
        width: auto; left: 105px; bottom: 150px;
    }
    .swiper-pagination-bullet{
        width: 12px; height: 12px;
        background-color: #fff; opacity: 0.2;
    }
    .swiper-pagination-bullet-active{
        background-color: #fff; opacity: 1;
    }
    .swiper-playpause{
        position: absolute; z-index: 300;
        left: 80px; bottom: 151px;
        width: 20px; height: 20px;
        cursor: pointer;
        span{
            display: block; width: 12px; height: 14px; margin: 3px 4px;
            &.active{ display: none; }
        }
        .btn_pause{
            border-left: 4px solid #fff; border-right: 4px solid #fff;
        }
        .btn_play{
            background-image: url(https://www.tving.com/img/icon_play_arow.svg);
            background-repeat: no-repeat; background-position: center;
        }
    }
`;

function MainList({ mains }) {
    const [swiper, setSwiper] = useState(null);
    const [cnt, setCnt] = useState(false);

    const btnPause = useRef();
    const btnPlay = useRef();

    useEffect(() => {
        const swiperInstance =  document.querySelector('.mainSwiper').swiper;
        setSwiper(swiperInstance);
    },[]);


    const onHandleClick = () => {
        if(cnt){
            btnPause.current.classList.remove('active');
            btnPlay.current.classList.add('active');
            swiper.autoplay.resume();
            
        }else{
            btnPause.current.classList.add('active');
            btnPlay.current.classList.remove('active');
            swiper.autoplay.pause();
        }
        setCnt(!cnt);
    }
    

    return (
        <MainBannerBlock>
            <Swiper
                effect={"fade"}
                loop={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay, EffectFade]} 
                className="mainSwiper"
            >
                {mains.map(main => (
                    <SwiperSlide key={main.id}>
                        <img src={main.url} alt="메인이미지" />
                        <p>{main.explain}</p>
                        <a href={`http://localhost:3000/tvprogramnew/${main.id}`}>자세히보기</a>
                    </SwiperSlide>
                ))}

                <div className="swiper-playpause" onClick={onHandleClick}>
                    <span 
                        className="btn_pause"
                        ref={btnPause}
                    ></span>
                    <span 
                        className="btn_play active" 
                        ref={btnPlay}
                    ></span>
                </div>
            </Swiper>
        </MainBannerBlock>
    );
}

export default MainList;