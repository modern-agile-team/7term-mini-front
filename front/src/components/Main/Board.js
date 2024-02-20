import styled from '@emotion/styled';
import BeeLogo from '../entrie/BeeLogo';
import React from 'react';

export default function Board() {
  const StyleBoxButton = styled.div`
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
          <StyleBoxButton>님 반갑습니다!</StyleBoxButton>
          <div className="buttonSection">
            <div className="logoutButton">로그아웃</div>
            <div className="newPostButton">글쓰기</div>
          </div>
        </section>
        <hr color="#E4E1CB"></hr>
        <section className="boarderSection">
          <StyleBoxButton>전체</StyleBoxButton>
          <StyleBoxButton>자유</StyleBoxButton>
          <StyleBoxButton>인기</StyleBoxButton>
          <StyleBoxButton>10대</StyleBoxButton>
          <StyleBoxButton>20대</StyleBoxButton>
          <StyleBoxButton>30대</StyleBoxButton>
        </section>
      </div>
    </>
  );
}
