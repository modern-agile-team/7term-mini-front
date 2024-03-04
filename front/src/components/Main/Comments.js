import BeeLogo from '../entrie/BeeLogo';
import styled from '@emotion/styled';
import {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';

export default function Comments(props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const Content = styled.div`
    width: 50vw;
    height: 3vh;
    margin-right: 2vw;
    padding: 20px;
    margin-left: 1vw;
    background-color: #f3f8f1;
    border-radius: 20px;
    border: none;
    resize: none;
    outline: none;
    font-family: 'Cafe24SsurroundAir';
    font-size: 90%;
  `;

  const UserName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: #647d87;
    font-size: 80%;
    margin-left: 2vw;
  `;

  return (
    <>
      <div
        style={{
          width: '63vw',
          height: '12vh',
          backgroundColor: '#e1eddc',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: '1vh 0vh',
        }}
      >
        <UserName>
          <BeeLogo width="2.5vw" margin="0px 0px 10px 0px" />
          {props.nickname}
        </UserName>
        <Content>{props.content}</Content>
        <div>댓삭</div>
      </div>
    </>
  );
}
