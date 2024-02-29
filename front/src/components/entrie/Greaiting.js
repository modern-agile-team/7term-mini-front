import logo from '../../assets/greate.png';
import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

export default function Greaiting(props) {
  const [loveCount, setLoveCount] = useState(false);
  const [searchParams] = useSearchParams();
  const no = searchParams.get('no');

  useEffect(() => {
    if (loveCount) {
      del_love();
    } else {
      post_love();
    }
  }, [loveCount]);

  function post_love() {
    fetch(`http://15.164.231.77:3000/boards/${no}/love`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then(response => response.json())
      .then(result => {})
      .catch(err => {
        alert(err);
      });
  }

  function del_love() {
    fetch(`http://15.164.231.77:3000/boards/${no}/love`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
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
          setLoveCount(!loveCount);
        }}
      />
      <span>{props.length}</span>
    </>
  );
}
