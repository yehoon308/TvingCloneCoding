import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderBlock = styled.header`
    position: fixed; top: 0; left: 0; z-index: 5000;
    width: 100%; height: 90px; padding: 0 60px; 
    background: linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
    display: flex; align-items: center;

    transition: background 0.3s;

    /* 스크롤시 active 상태 */
    &.active{
        background: rgba(0,0,0,0.9);
    }

    h1{ margin-right: 50px; }
    h1 img{ 
        position: relative; top: 5px;
        height: 40px; 
    }
    ul{ display: flex; }
    li{ font-size: 20px; margin-right: 40px; }
    li:first-child a::before{
        content: url("https://www.tving.com/img/icon_menu_live.svg");
        position: relative; top: 3px;
        margin-right: 10px;
    }
`;


//header영역 프리젠테이셔널 컴포넌트
function Header() {
    const header = useRef();
    
    //아래 방법을 사용하면 스크롤 이벤트가 계속 발생됩니다.
    //렌더링하면서 계속 DOM을 재탐색하기 때문에 React특성상 성능에도 문제가 발생됩니다.
    /* 
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    },[]);

    const handleScroll = () => {
        let windowTop = window.scrollY;

        if(windowTop > 50){
            header.current.classList.add("active");
        }else{
            header.current.classList.remove("active");
        }

        console.log("scrolled1");
    }
    */


    //성능 개선을 위해 스크롤 이벤트에 Timer를 두어서 Timer안에서 이벤트가 발생하고 이벤트가 발생된 후 해당 타이머는 초기화를 시켜주어 이벤트의 중복을 통한 성능 지연을 방지
    const handleScroll = () => {
        let windowTop = window.scrollY;

        if(windowTop > 50){
            header.current.classList.add("active");
        }else{
            header.current.classList.remove("active");
        }

        console.log("scrolled2");
    }
    useEffect(() => {    
        const timer = setInterval(() => {
          window.addEventListener("scroll", handleScroll);
        }, 100);
        return () => {
          clearInterval(timer);
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <HeaderBlock ref={header}>
            <h1><Link to="/"><img src="https://www.tving.com/img/tving-new-logo-pc.svg" alt="티빙로고" /></Link></h1>
            <ul>
                <li><Link to="/live">실시간</Link></li>
                <li><Link to="/tv">TV프로그램</Link></li>
                <li><Link to="/movie">영화</Link></li>
                <li><Link to="/paramount">파라마운트+</Link></li>
            </ul>
        </HeaderBlock>
    );
}

export default Header;