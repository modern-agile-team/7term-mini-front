import PostDel from '../../features/PostDel';
import Greaiting from '../entrie/Greaiting';
import UserComment from '../entrie/UserComment';
import Remove from './Remove';
import {Link, useSearchParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

export default function Post(props) {
  const {content, love_count, comment_count, no} = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const [loveCount, setLoveCount] = useState();
  const [result, setResult] = useState();

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
        setLoveCount(result.board.love_count);
        setResult(result);
      });
    // .catch(err => {
    //   alert('err');
    // });
  }, [result]);

  return (
    <>
      <div className="post">
        <header
          style={{
            display: 'flex',
            justifyContent: 'right',
            margin: '1vw 1vw 0vw 1vw',
          }}
        >
          <Link
            onClick={() => {
              PostDel(no);
            }}
          >
            <Remove width="1.5vw" margin="0" />
          </Link>
        </header>
        <Link to={`/detail-post?no=${no}`} className="postContent">
          {content}
        </Link>
        <footer
          style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            marginTop: '8vh',
            marginRight: '1.5vw',
          }}
        >
          <Greaiting width="1.5vw" margin="0 0.5vw" />
          <UserComment width="1.5vw" margin="0 0.5vw" length={comment_count} />
        </footer>
      </div>
    </>
  );
}
