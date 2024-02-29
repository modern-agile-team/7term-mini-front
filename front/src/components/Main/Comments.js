import BeeLogo from '../entrie/BeeLogo';
import styled from '@emotion/styled';
import {useSearchParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

export default function Comments() {
  const [viewComments, setViewComments] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [wholePage, setWholePage] = useState();
  const [page, setPage] = useState(1);
  const no1 = searchParams.get('no');

  useEffect(props => {
    fetch(`http://15.164.231.77:3000/boards/${no1}/comments/2`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(result => {
        setViewComments(result.comments);
      })
      .catch(err => {
        alert('에러');
      });
  }, []);

  function previous() {
    if (page > 0) {
      setPage(page => page - 1);
    } else {
      alert('첫 번째 페이지입니다.');
    }
  }

  function next() {
    if (page < wholePage) {
      setPage(page => page + 1);
    } else {
      alert('마지막 페이지입니다.');
    }
  }

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
        </UserName>
        <Content></Content>
      </div>
    </>
  );
}
