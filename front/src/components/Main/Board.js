import styled from '@emotion/styled';
import BeeLogo from '../entrie/BeeLogo';
import React from 'react';
import {Link} from 'react-router-dom';
import Logout from '../../features/Logout';

export default function Board() {
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
          <ButtonBox>님 반갑습니다!</ButtonBox>
          <div className="buttonSection">
            <Link to="/" onClick={Logout} className="logoutButton">
              로그아웃
            </Link>
            <Link to="/new-post" className="newPostButton">
              글쓰기
            </Link>
          </div>
        </section>
        <hr color="#E4E1CB"></hr>
        <section className="boarderSection">
          <ButtonBox>전체</ButtonBox>
          <ButtonBox>자유</ButtonBox>
          <ButtonBox>인기</ButtonBox>
          <ButtonBox>10대</ButtonBox>
          <ButtonBox>20대</ButtonBox>
          <ButtonBox>30대</ButtonBox>
        </section>
      </div>
    </>
  );
}
