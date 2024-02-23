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
import {useEffect, useState} from 'react';

export default function PostView() {
  const [categories, setCategories] = useState('');

  useEffect(() => {
    fetch('http://15.164.231.77:3000/boards/7', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then(response => response.json())
      .then(result => {
        setCategories(result.board);
      })
      .catch(err => {
        alert('에러');
      });
  }, []);

  console.log(categories.no);

  const nowTime = moment().format('YYYY-MM-DD HH:mm');
  return (
    <>
      <div className="greenBox1">
        <div className="postViewHeader">
          <span>
            {categories.no}번째 게시물 {categories.created_at}
          </span>
          <Link to="/norang">
            <Remove width="2vw" margin="0px 10px" />
          </Link>
        </div>
        <div className="postViewBody">{categories.content}</div>
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
