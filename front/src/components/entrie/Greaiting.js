import logo from '../../assets/greate.png';
import {useEffect, useState} from 'react';

export default function Greaiting(props) {
  const [loveCount, setLoveCount] = useState('안누름');
  const [love, setLove] = useState(false);
  const no = props.no;
  useEffect(() => {
    if (loveCount === '안누름') {
      fetch(`http://15.164.231.77:3000/boards/${no}/love`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }).then(() => {
        alert(loveCount + 'ㅅ공');
        setLoveCount(loveCount === '누름' ? '안누름' : '누름');
      });
    } else if (loveCount === '누름') {
      fetch(`http://15.164.231.77:3000/boards/${no}/love`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }).then(() => {
        alert(loveCount + '삭제');
        setLoveCount(loveCount === '누름' ? '안누름' : '누름');
      });
    }
  }, [love]);

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
          setLove(!love);
        }}
      />
      <span>{props.length}</span>
    </>
  );
}
