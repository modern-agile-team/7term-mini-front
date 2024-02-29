import {Link, useSearchParams} from 'react-router-dom';
import Remove from './Remove';
import Greaiting from '../entrie/Greaiting';
import UserComment from '../entrie/UserComment';
import * as React from 'react';
import Pencil from '../entrie/Pencil';
import Comments from './Comments';
import {useEffect, useState} from 'react';

export default function PostView(props) {
  const [categories, setCategories] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const no1 = searchParams.get('no');

  useEffect(() => {
    fetch(`http://15.164.231.77:3000/boards/${no1}`, {
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

  const [createComment, setCreateComment] = useState('');
  function create_comment() {
    if (window.confirm('댓글을 작성하시겠습니까?'))
      fetch(`http://15.164.231.77:3000/boards/${no1}/comments`, {
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
          window.alert('작성이 완료되었습니다');
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
          <post>
            {categories.nickname}님 :: {categories.created_at}
          </post>
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
            <div
              className="CommentButton"
              onClick={() => {
                create_comment();
              }}
            >
              <Pencil width="2.5vw" margin="0px 0px 10px 0px" />
              댓글 남기기
            </div>
          </div>
        </div>
        <div className="commentList">
          <Comments></Comments>
          <Comments />
        </div>
      </div>
    </>
  );
}
