import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBars, faHouse } from '@fortawesome/free-solid-svg-icons';

const HeaderArea = styled.div`
    position: relative;
    width: 100%;
    height: 25px;
`;

const HeaderWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 25px;
    transition: 0.4s ease;
    background-color:white;
    &.hide {
        transform: translateY(-80px);
    }
    width:420px;
    display:flex;
    justify-content: space-between;
`;

const throttle = function (callback, waitTime) {
    let timerId = null;
    return (e) => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callback.call(this, e);
            timerId = null;
        }, waitTime);
    };
};

const Header = () => {
    const [hide, setHide] = useState(false);
    const [pageY, setPageY] = useState(0);
    const documentRef = useRef(document);

    const handleScroll = () => {
        const { pageYOffset } = window;
        const deltaY = pageYOffset - pageY;
        const hide = pageYOffset !== 0 && deltaY >= 0;
        setHide(hide);
        setPageY(pageYOffset);
    };

    const throttleScroll = throttle(handleScroll, 50);

    useEffect(() => {
        documentRef.current.addEventListener('scroll', throttleScroll);
        return () => documentRef.current.removeEventListener('scroll', throttleScroll);
    }, [pageY]);

    return (
        <HeaderArea>
            <HeaderWrap className={hide && 'hide'}>
              <div className="Header-left"><FontAwesomeIcon icon={faArrowLeft} /> <FontAwesomeIcon icon={faHouse} /></div>
          
              <div>금주의 전단광고</div>
              <FontAwesomeIcon icon={faBars} />
            </HeaderWrap>
        </HeaderArea>
    );
};

export default Header;