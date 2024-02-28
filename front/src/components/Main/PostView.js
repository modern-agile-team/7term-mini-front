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
  const [viewcomments, setViewComments] = useState('');

  useEffect(() => {
    fetch('http://15.164.231.77:3000/boards/8', {
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

  useEffect(() => {
    fetch('http://15.164.231.77:3000/boards/2/comments', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then(response => response.json())
      .then(result => {
        setViewComments(result.board);
      })
      .catch(err => {
        alert('에러');
      });
  }, []);

  const [createComment, setCreateComment] = useState('');
  function create_comment() {
    fetch('http://15.164.231.77:3000/boards/2/comments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({
        content: createComment,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        console.log(createComment);
      })
      .catch(err => {
        alert('에러');
      });
  }
  const onchangeComment = e => {
    setCreateComment(e.target.value);
  };

  return (
    <>
      <div className="greenBox1">
        <div className="postViewHeader">
          #{categories.no} :: {categories.created_at}
          <Link to="/norang">
            <Remove width="2vw" margin="0px 10px" />
          </Link>
        </div>
        <div className="postViewBody">{categories.content}</div>
        <div className="postViewFooter">
          <span>· 수정하기</span>
          <div className="community">
            <Greaiting
              width="1.5vw"
              margin="0 0.5vw"
              length={categories.love_count}
            />
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
              onChange={onchangeComment}
            />
            <Pencil width="4vh"></Pencil>
            <button
              className="CommentButton"
              onClick={() => {
                create_comment();
              }}
            >
              댓글작성하기
            </button>
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
