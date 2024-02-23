import {Link} from 'react-router-dom';
import Remove from './Remove';
import moment from 'moment';
import Greaiting from '../entrie/Greaiting';
import UserComment from '../entrie/UserComment';
import Pagination from '@mui/material/Pagination';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Pencil from '../entrie/Pencil';
import Comments from './Comments';
import {useEffect} from 'react';

export default function PostView() {
  function view_post() {
    fetch('http://15.164.231.77:3000/boards/7', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      // body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        alert('에러');
      });
  }

  useEffect(() => {
    view_post();
  }, []);

  const nowTime = moment().format('YYYY-MM-DD HH:mm');
  return (
    <>
      <div className="greenBox1">
        <div className="postViewHeader">
          <span># 페이지번호 :: {nowTime}</span>
          <Link to="/norang">
            <Remove width="2vw" margin="0px 10px" />
          </Link>
        </div>
        <div className="postViewBody">
          동해물과 백두산이 마르고 닳도록 하느님이 보우 하사 우리나라 만세
          무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 남산 위에 저
          소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리
          화려 강산 대한 사람 대한으로 길이 보전하세 Hey 한국! Hey 한국! oh oh
          oh oh - 대! 한! 민! 국! 대! 한! 민! 국! 가을 하늘 공활한데 높고 구름
          없이 밝은 달은 우리 가슴 일편단심일세 무궁화 삼천리 화려 강산
        </div>
        <div className="postViewFooter">
          <span>· 수정하기</span>
          <div className="community">
            <Greaiting width="1.5vw" margin="0 0.5vw" />
            <UserComment width="1.5vw" margin="0 0.5vw" />
          </div>
        </div>
        <hr
          style={{
            marginTop: '1.5vh',
            border: '1.5px dashed #4C5F5D',
            width: '63vw',
            textAlign: 'center',
            margin: '0px auto',
          }}
        ></hr>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2vh',
          }}
        >
          <div className="commentField">
            <textarea
              type="text"
              className="inputComment"
              placeholder="100자 이내로 입력하시오."
            />
            <div className="commentButton">
              <Pencil width="2.5vw" margin="0px 0px 10px 0px" />
              댓글 남기기
            </div>
          </div>
        </div>
        <div className="commentList">
          <Comments />
          <Comments />
        </div>
        <div className="pagenation">
          <Stack spacing={2}>
            <Pagination count={3} showFirstButton showLastButton />
          </Stack>
        </div>
      </div>
    </>
  );
}
