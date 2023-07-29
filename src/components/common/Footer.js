import React from 'react';
import styled from 'styled-components';
import SNS from '../../apis/sns.json';

const FooterBlock = styled.footer`
    width: 100%; padding: 0 60px;
    .f_top{
        width: 100%; height: 60px; line-height: 60px;
        border-bottom: 1px solid #222;
        display: flex; justify-content: space-between;
    }
    .notice{
        display: flex; 
        h3{
            margin-right: 20px;
            font-size: 18px; font-weight: normal; color: rgb(110, 110, 110);
        }
        a{ font-size: 18px; font-weight: bold; color: rgb(163, 163, 163); }
    }
    .family{
        ul{
            display: flex;
            li{
                margin-left: 20px;
                a{
                    font-size: 18px; font-weight: bold; color: rgb(163, 163, 163);
                }
            }
        }
    }
    .f_bottom{
        padding-bottom: 130px;
        .f_nav{
            display: flex; height: 60px; line-height: 60px;
            li{
                margin-right: 30px;
                font-size: 18px; color: rgb(163, 163, 163);
                &:nth-child(3){ font-weight: bold; }
            }
        }
        .footer_text{
            span{
                font-size: 16px; font-weight: normal; 
                color: rgb(110, 110, 110); line-height: 24px;
                margin-right: 20px;
                &::after{
                    content: '|'; font-size: 10px;
                    position: relative; top: -3px; left: 10px;
                }
                &:last-child::after{ display: none; }
            }
        }
        .copy{
            font-size: 16px; font-weight: normal; 
            color: rgb(110, 110, 110); line-height: 24px;
        }
        .sns{
            padding: 30px 0; display: flex;
            li{ margin-right: 10px; } 
        }
    }
`;

//footer영역
function Footer() {
    const footerMenus = ['고객센터','이용약관','개인정보처리방침','청소년 보호정책','법적고지','이벤트','인재채용'];
    const footerTexts = [
        ['대표이사 : YANG JIEUL','사업자정보확인','사업자등록번호 : 188-88-01893','통신판매신고번호 : 2020-서울마포-3641호'],
        ['사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층(상암동)','호스팅사업자 : 씨제이올리브네트웍스(주)'],
        ['고객문의 바로가기','대표메일 : tving@cj.net','고객센터 : 1670-1525 (평일/주말 09시~18시, 공휴일 휴무)'],
        ['ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 080-080-0780','Mnet 고객센터(방송편성문의) : 1855-1631']
    ];

    return (
        <FooterBlock>
            <div className="f_top">
                <div className="notice">
                    <h3>공지사항</h3>
                    <a href="#!">[안내] 개인정보처리방침 개정 안내 (2023년 3월 3일)</a>
                </div>
                <div className="family">
                    <ul>
                        <li><a href="#!">브랜드 바로가기 +</a></li>
                        <li><a href="#!">그룹 계열사 바로가기 +</a></li>
                    </ul>
                </div>
            </div>
            <div className="f_bottom">
                <ul className="f_nav">
                    {
                        footerMenus.map((footerMenu,index) => (
                            <li key={index}>{footerMenu}</li>
                        ))
                    }
                </ul>
                <div className="footer_text">
                    {
                        footerTexts.map((footerText,index) => (
                            <p key={index}>
                                {
                                    footerText.map((text,i) => (
                                        <span key={i}>{text}</span>
                                    ))
                                }
                            </p>
                        ))
                    }
                </div>
                <ul className="sns">
                    {
                        SNS.sns.map(s => (
                            <li key={s.id}>
                                <a href={s.url} target="_blank" rel="noopener noreferrer">
                                    <img src={s.img} alt={s.name} />
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <p className="copy">Copyright © 주식회사 티빙 All right reserved.</p>
            </div>
        </FooterBlock>
    );
}

export default Footer;