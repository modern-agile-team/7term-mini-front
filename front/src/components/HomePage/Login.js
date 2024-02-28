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
      fetch('http://15.164.231.77:3000/auth/login', {
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
