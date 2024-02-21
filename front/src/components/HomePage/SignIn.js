import Header from './Header';
import UserInput from './UserInput';
import HomeButton from './HomeButton';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  function sign_in() {
    if (true) {
      fetch('http://15.164.231.77:3000/auth/signup', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
          nickname: auth.nickname,
          id: auth.id,
          password: auth.pw,
          email: auth.email,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.message === '회원가입에 성공하였습니다.') {
            if (confirmnavigate()) {
              navigate(`/login`);
            }
          }
        })
        .catch(err => {
          console.log(err);
          alert('에러');
        });
    } else {
      alert('실패');
    }
  }
  const [auth, setAuth] = useState({
    nickname: '',
    id: '',
    pw: '',
    email: '',
  });

  const NICKNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
  const [validNick, setValidNick] = useState(false);

  useEffect(() => {
    const result = NICKNAME_REGEX.test(auth.nickname);
    setValidNick(result);
  }, [auth.nickname]);

  const onChange = e => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value,
    });
  };

  function confirmnavigate() {
    return window.confirm('회원가입이 완료되었어요 로그인 창으로 이동할까요?');
  }

  return (
    <>
      <div
        className="body"
        style={{
          flexDirection: 'column',
        }}
      >
        <Header />

        <h1
          style={{
            fontSize: '40px',
            marginTop: '20px',
          }}
        >
          회원가입
        </h1>
        <UserInput
          text="닉네임"
          key="signName"
          name="nickname"
          UserInput={onChange}
        />
        <UserInput text="아이디" key="signId" name="id" UserInput={onChange} />
        <UserInput
          text="비밀번호"
          key="signPw"
          name="pw"
          UserInput={onChange}
        />
        <UserInput
          text="비밀번호 확인"
          key="signPwCheck"
          name="confirmpw"
          UserInput={onChange}
        />
        <UserInput
          text="이메일"
          key="signEmail"
          name="email"
          UserInput={onChange}
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
            margin="40px 20px"
            onClick={sign_in}
          />
          <HomeButton
            link="/"
            text="둘 다 안할래요"
            width="13vw"
            height="7vh"
            color="#FF9A9A"
            margin="40px 20px"
          />
          <HomeButton
            link="/login"
            text="로그인 하러 가기"
            width="13vw"
            height="7vh"
            margin="40px 20px"
          />
        </div>
      </div>
    </>
  );
}
