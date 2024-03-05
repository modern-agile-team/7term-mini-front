import {useState} from 'react';
import Header from './Header';
import HomeButton from './HomeButton';
import LoginBody from './LoginBody';
import UserInput from './UserInput';
import {useNavigate} from 'react-router-dom';

export default function Login() {
  const [getauthId, setId] = useState('');
  const [getauthPw, setPw] = useState('');
  const navigate = useNavigate();

  function login() {
    if (getauthId.length < 16 && getauthPw.length < 16) {
      fetch(process.env.REACT_APP_FETCH_LOGIN, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
          id: getauthId,
          password: getauthPw,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.accessToken) {
            localStorage.setItem('accessToken', result.accessToken);
            localStorage.setItem('refreshToken', result.refreshToken);
            navigate(`/NORANG`);
            window.localStorage.setItem('name', result.userNickName);
          } else if (!getauthId) {
            alert('아이디를 입력해주세요');
          } else if (!getauthPw) {
            alert('비밀번호를 입력해주세요');
          } else if (result.message === '아이디가 틀렸습니다.') {
            alert('존재하지 않는 아이디입니다.');
          } else if (result.message === '패스워드가 틀렸습니다.') {
            alert('틀린 비밀번호입니다.');
          }
        })
        .catch(err => {
          alert(err);
        });
    } else {
      alert('login failed');
    }
  }

  const onchangeId = e => {
    setId(e.target.value);
  };

  const onchangePw = e => {
    setPw(e.target.value);
  };

  // console.log(getauthId);
  // console.log(getauthPw);

  return (
    <>
      <div
        className="body"
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <Header />

        <LoginBody />
        <UserInput text="아이디" key="loginId" UserInput={onchangeId} />
        <UserInput
          text="비밀번호"
          key="loginPassword"
          type="password"
          UserInput={onchangePw}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '10vh',
          }}
        >
          <HomeButton
            link=""
            text="입력 완료"
            width="13vw"
            height="7vh"
            margin="60px 20px"
            onClick={login}
          />
          <HomeButton
            link="/"
            text="둘 다 안할래요"
            width="13vw"
            height="7vh"
            color="#FF9A9A"
            margin="60px 20px"
          />
          <HomeButton
            link="/sign-in"
            text="회원가입 하러 가기"
            width="13vw"
            height="7vh"
            margin="60px 20px"
          />
        </div>
      </div>
    </>
  );
}
