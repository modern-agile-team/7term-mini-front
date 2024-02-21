import {useState, useEffect} from 'react';
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
    if (getauthId.length > 8 && getauthPw.length > 8) {
      fetch('15.164.231.77:3000/auth/login', {
        method: 'GET',
        headers: [['content-type', 'application/json']],
        body: JSON.stringify({
          ID: getauthId,
          PW: getauthPw,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.data.acessToken) {
            localStorage.setItem('accesstoken', result.data.acessToken);
            localStorage.setItem('refreshtoken', result.data.refreshToken);
            navigate(`http://localhost:3000/NORANG`);
          }
        })
        .catch(() => {
          console.log('에러');
        });
    } else {
      alert('끄지세요');
    }
  }

  const onchangeId = e => {
    setId(e.target.value);
  };

  const onchangePw = e => {
    setPw(e.target.value);
  };

  console.log(getauthId, getauthPw);
  return (
    <>
      <div
        className="body"
        style={{
          flexDirection: 'column',
        }}
      >
        <Header />

        <LoginBody />
        <UserInput text="아이디" key="loginId" UserInput={onchangeId} />
        <UserInput
          text="비밀번호"
          key="loginPassword"
          // type="password"
          UserInput={onchangePw}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
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
