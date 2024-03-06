import styled from '@emotion/styled';
import BeeLogo from '../entrie/BeeLogo';
import React from 'react';
import {Link} from 'react-router-dom';
import Logout from '../../features/Logout';

export default function Board() {
  const [nickName, setNickName] = React.useState();
  const loginCheck = window.localStorage.getItem('name');
  const [hovercategories, setHoverCategories] = React.useState('all');

  React.useEffect(() => {
    setNickName(loginCheck);
  }, [loginCheck]);

  const ButtonBox = styled.div`
    font-family: 'Cafe24SsurroundAir';
    margin: 10px 0px 0px 0px;
    width: 16vw;
    height: 4.5vh;
    background-color: #fefdf6;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 0.7px #e5e4de;
    &:hover {
      background: #b5d3a7;
      transition: 0.5s;
    }
  `;

  const HoverButtonBox = styled.div`
    font-family: 'Cafe24SsurroundAir';
    margin: 10px 0px 0px 0px;
    width: 16vw;
    height: 4.5vh;
    background-color: #fefdf6;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1.8px #b5d3a7;
  `;

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <section className="logoSection">
          <BeeLogo width="4vw" margin="10px 0px" />
        </section>
        <section className="infoSection">
          <ButtonBox>{nickName ? nickName : '@@'}님 반갑습니다!</ButtonBox>
          <div className="buttonSection">
            {nickName ? (
              <Link to="/" onClick={Logout} className="logoutButton">
                로그아웃
              </Link>
            ) : (
              <Link to="/login" className="logoutButton">
                로그인
              </Link>
            )}

            <Link to="/new-post" className="newPostButton">
              글쓰기
            </Link>
          </div>
        </section>
        <hr color="#E4E1CB"></hr>
        <section className="boarderSection">
          <Link
            to="/NORANG?category=0"
            onClick={() => setHoverCategories('all')}
          >
            {hovercategories === 'all' ? (
              <HoverButtonBox>전체</HoverButtonBox>
            ) : (
              <ButtonBox>전체</ButtonBox>
            )}
          </Link>
          <Link to="/NORANG?category=5" onClick={() => setHoverCategories(5)}>
            {hovercategories === 5 ? (
              <HoverButtonBox>인기</HoverButtonBox>
            ) : (
              <ButtonBox id="5">인기</ButtonBox>
            )}
          </Link>
          <Link to="/NORANG?category=4" onClick={() => setHoverCategories(4)}>
            {hovercategories === 4 ? (
              <HoverButtonBox>자유</HoverButtonBox>
            ) : (
              <ButtonBox id="4">자유</ButtonBox>
            )}
          </Link>
          <Link to="/NORANG?category=1" onClick={() => setHoverCategories(1)}>
            {hovercategories === 1 ? (
              <HoverButtonBox>10대</HoverButtonBox>
            ) : (
              <ButtonBox id="1">10대</ButtonBox>
            )}
          </Link>
          <Link to="/NORANG?category=2" onClick={() => setHoverCategories(2)}>
            {hovercategories === 2 ? (
              <HoverButtonBox>20대</HoverButtonBox>
            ) : (
              <ButtonBox id="2">20대</ButtonBox>
            )}
          </Link>
          <Link to="/NORANG?category=3" onClick={() => setHoverCategories(3)}>
            {hovercategories === 3 ? (
              <HoverButtonBox>30대</HoverButtonBox>
            ) : (
              <ButtonBox id="3">30대</ButtonBox>
            )}
          </Link>
        </section>
      </div>
    </>
  );
}
