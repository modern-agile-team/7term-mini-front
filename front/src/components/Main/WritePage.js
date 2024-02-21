import Remove from './Remove';
import moment from 'moment';
import 'moment/locale/ko';
import BeeLogo from '../entrie/BeeLogo';
import Category from './Category';
import Pencil from '../entrie/Pencil';
import {useState} from 'react';
import {Link} from 'react-router-dom';

export default function WritePage() {
  const nowTime = moment().format('YYYY-MM-DD HH:mm');
  const [text, setText] = useState('');

  function onChange(event) {
    setText(event.target.value);
  }
  return (
    <>
      <div className="greenBox">
        <div className="postInfo">
          {nowTime}
          <Link to="/">
            <Remove width="2vw" margin="0px 10px" />
          </Link>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div className="postHeader">
            <BeeLogo width="3.5vw" margin="0vw 0vw 0vw 1.5vw" />
            <form className="categorySelect">
              <Category />
            </form>
          </div>
          <hr
            style={{
              marginTop: '1.5vh',
              border: '1.5px dashed #4C5F5D',
              width: '63vw',
            }}
          ></hr>
          <div className="postBody">
            <textarea
              type="text"
              className="writeField"
              placeholder="200자 이내로 입력하시오."
              maxlength="200"
              onChange={onChange}
            ></textarea>
            <div className="postButton">
              <Pencil width="3.5vw" margin="0px 0px 10px 0px" />
              글쓰기
              <div className="textLength">{`${text.length} / 200`}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
