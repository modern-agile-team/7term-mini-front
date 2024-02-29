import logo from '../../assets/greate.png';
import {useState} from 'react';
import {useSearchParams} from 'react-router-dom';

export default function Greaiting(props) {
  const [loveCount, setLoveCount] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const no = searchParams.get('no');

  function post_love() {
    fetch(`http://15.164.231.77:3000/boards/${no}/love`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then(response => response.json())
      .then(result => {
        if (result.statuscode === 201) {
          setLoveCount(1);
        }
      })
      .catch(err => {
        alert('에러');
      });
  }

  function del_love() {
    fetch(`http://15.164.231.77:3000/boards/${no}/love`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then(response => response.json())
      .then(result => {
        setLoveCount(result);
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
        onClick={loveCount ? del_love : post_love}
      />
      <span>{props.length}</span>
    </>
  );
}
