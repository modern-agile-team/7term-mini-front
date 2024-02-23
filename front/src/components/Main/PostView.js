import {Link} from 'react-router-dom';
import Remove from './Remove';
import moment from 'moment';
import {useEffect, useState} from 'react';

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
        const results = result;
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
      <div className="greenBox">
        <div className="postViewHeader">
          <span>view_post().category_no</span>
          <Link to="/norang">
            <Remove width="2vw" margin="0px 10px" />
          </Link>
        </div>
        <div className="postViewBody"></div>
        <div className="postViewfooter">수정하기</div>
      </div>
    </>
  );
}
