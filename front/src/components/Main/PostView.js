import {Link, useSearchParams} from 'react-router-dom';
import Remove from './Remove';
import Greaiting from '../entrie/Greaiting';
import UserComment from '../entrie/UserComment';
import * as React from 'react';
import Pencil from '../entrie/Pencil';
import Comments from './Comments';
import {useEffect, useState} from 'react';
import Previous from '../entrie/Previous';
import Next from '../entrie/Next';
import PostCorrection from '../../features/PostCorrection';

export default function PostView(props) {
  const [viewComments, setViewComments] = useState('');
  const [categories, setCategories] = useState('');
  const [searchParams] = useSearchParams();
  const [wholePage, setWholePage] = useState();
  const [page, setPage] = useState(1);
  const no1 = searchParams.get('no');
  const [correction, setCorrection] = useState(0);
  const [content, setContent] = useState(categories.content);
  const onChangeContent = e => {
    setContent(e.target.value);
  };

  function previous() {
    if (page > 1) {
      setPage(page => page - 1);
    }
  }

  function next() {
    if (page < wholePage) {
      setPage(page => page + 1);
    } else {
      alert('마지막 페이지입니다.');
    }
  }

  //댓글조회
  useEffect(
    props => {
      fetch(
        `http://15.164.231.77:3000/boards/${no1}/comments/${page ? page : 1}`,
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      )
        .then(response => response.json())
        .then(result => {
          setViewComments(result);
          setWholePage(result.allCommentPages);
        })
        .catch(err => {
          alert('에러');
        });
    },
    [no1, page],
  );

  //글조회
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
  }, [no1]);

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
    <div>
      <div className="greenBox1">
        <div className="postViewHeader">
          {categories.nickname}님 :: {categories.created_at}
          <Link to="/norang">
            <Remove width="2vw" margin="0px 10px" />
          </Link>
        </div>
        {correction ? (
          <textarea id="postCorrect" onChange={onChangeContent}>
            {categories.content}
          </textarea>
        ) : (
          <div className="postViewBody">{categories.content}</div>
        )}

        <div className="postViewFooter">
          <div
            style={{
              color: '#5c70de',
              fontSize: '85%',
            }}
            onClick={() => {
              if (correction) {
                setCorrection(0);
                PostCorrection(no1, categories.category_no, content);
              } else {
                setCorrection(1);
              }
            }}
          >
            {localStorage.getItem('name') === categories.nickname
              ? correction === 0
                ? '· 수정하기'
                : '· 완료'
              : null}
          </div>
          <div className="community">
            <Greaiting
              width="1.5vw"
              margin="0 0.5vw"
              length={categories.love_count}
            />
            <UserComment
              width="1.5vw"
              margin="0 0.5vw"
              length={viewComments.commentCount}
            />
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
        />
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
          {viewComments.comments &&
            viewComments.comments.map((item, index) => (
              <Comments key={index} {...viewComments.comments[index]} />
            ))}
        </div>
        <div className="pageMove">
          <div onClick={previous}>
            <Previous width="2.8vw" margin="0 28vw 0 0" />
          </div>
          <span
            style={{
              marginTop: '1.8vh',
            }}
          >
            {page === 0 ? 1 : page}
          </span>
          <div onClick={next}>
            <Next width="2.8vw" margin="0 0 0 28vw" />
          </div>
        </div>
      </div>
    </div>
  );
}
