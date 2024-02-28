import Remove from './Remove';
import Clock from 'react-live-clock';
import BeeLogo from '../entrie/BeeLogo';
import {useNavigate} from 'react-router-dom';
import Pencil from '../entrie/Pencil';
import {useState} from 'react';
import {Link} from 'react-router-dom';

export default function NewPost() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    category: '0',
    content: '',
  });

  const onChange = e => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value,
    });
  };

  function postSend() {
    if (auth.content.length !== 0) {
      if (window.confirm('작성하시겠습니까?')) {
        fetch('http://15.164.231.77:3000/boards/', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify({
            categoryNo: auth.category,
            content: auth.content,
          }),
        })
          .then(response => response.json())
          .then(response => {
            alert(response.message);
            if (response.statusCode === 201) {
              navigate(`/NORANG`);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    } else {
      alert('내용을 입력해주세요!');
    }
  }

  return (
    <>
      <div className="greenBox">
        <div className="postInfo">
          <Clock
            format={'YYYY-MM-DD hh:mm'}
            ticking={true}
            interval={1000}
            timezone={'Asia/Seoul'}
          />
          <Link to="/NORANG">
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
              <span>카테고리 선택</span>
              <div className="radios">
                <label>
                  <input
                    type="radio"
                    name="category"
                    value="4"
                    onChange={onChange}
                  />
                  자유
                </label>
                <label>
                  <input
                    type="radio"
                    name="category"
                    value="1"
                    onChange={onChange}
                  />
                  10대
                </label>
                <label>
                  <input
                    type="radio"
                    name="category"
                    value="2"
                    onChange={onChange}
                  />
                  20대
                </label>
                <label>
                  <input
                    type="radio"
                    name="category"
                    value="3"
                    onChange={onChange}
                  />
                  30대
                </label>
              </div>
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
              name="content"
              placeholder="200자 이내로 입력하시오."
              maxlength="200"
              onChange={onChange}
            ></textarea>
            <div className="postButton" onClick={postSend}>
              <Pencil width="3.5vw" margin="0px 0px 10px 0px" />
              글쓰기
              <div className="textLength">{`${auth.content.length} / 200`}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
