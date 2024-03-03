import logo from '../../assets/greate.png';
import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

export default function Greaiting(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loveCount, setLoveCount] = useState();
  const [result, setResult] = useState();
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

  const no1 = searchParams.get('no');

  function get_love_mark() {
    fetch(`http://15.164.231.77:3000/boards/${no1}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then(response => response.json())
      .then(result => {
        if (!result.userLoveMark) {
          fetch(`http://15.164.231.77:3000/boards/${no1}/love`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          })
            .then(response => response.json())
            .then(result => {
              console.log(result);
              console.log('좋아요');
            })
            .catch(err => {
              alert(err);
            });
        } else {
          fetch(`http://15.164.231.77:3000/boards/${no1}/love`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          })
            .then(result => {
              if (result) console.log('좋아요 취소');
            })
            .catch(err => {
              alert(err);
            });
        }
      })
      .catch(err => {
        alert(err);
      });
  }

  return (
    <>
      <img
        style={{
          width: props.width,
          margin: props.margin,
        }}
        src={logo}
        alt="좋아요"
        onClick={() => {
          get_love_mark();
        }}
      />
      <span>{props.loveCount}</span>
    </>
  );
}
