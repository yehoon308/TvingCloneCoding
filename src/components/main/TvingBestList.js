import React from 'react';
import H2Title from '../common/H2Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'; 

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import styled from 'styled-components';

const TvingBestBlock = styled.section`
    position: relative; top: -100px; z-index: 3000;
    padding: 20px 0 0 60px; margin-bottom: 50px;
    .swiper, swiper-container{ padding-top: 20px; }
    .swiper-slide{
        position: relative; transition: ease-in transform 0.2s;
        &:hover{
            transform: translateY(-15px);
        }
    }
    .swiper-slide .img_wrap{
        width: 100%; border-radius: 5px; overflow: hidden;
        margin-bottom: 10px;
    }
    .swiper-slide img{
        display: block; width: 100%;
    }
    .swiper-slide figcaption{ 
        font-size: 18px; color: rgba(255,255,255,0.87);
    }
    .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled{
        opacity: 0;
    }
    .swiper-button-next:after, .swiper-button-prev:after{ color: #fff; }
`;



function TvingBestList({ tvingbests }) {
    return (
        <TvingBestBlock>
            <H2Title name="티빙에서 꼭 봐야하는 콘텐츠" />
            <Swiper
                slidesPerView={7.2}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
            >
                {tvingbests.map(tvingbest => (
                    <SwiperSlide key={tvingbest.id}>
                        <Link to={`/tvingbest/${tvingbest.id}`}>
                            <figure>
                                <div className="img_wrap">
                                    <img src={tvingbest.poster} alt={tvingbest.name} />
                                </div>
                                <figcaption>{tvingbest.name}</figcaption>
                            </figure>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </TvingBestBlock>
    );
}

export default TvingBestList;