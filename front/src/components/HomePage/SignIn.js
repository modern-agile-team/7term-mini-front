import Header from './Header';
import UserInput from './UserInput';
import HomeButton from './HomeButton';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  function sign_in() {
    if (validNick && validId && validPw && validEmail) {
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
      alert('입력 양식을 확인해주세요');
    }
  }
  const [auth, setAuth] = useState({
    nickname: '',
    id: '',
    pw: '',
    confirmPw: '',
    email: '',
  });

  const NICKNAME_REGEX = /^[a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣0-9]{1,5}$/;
  const ID_REGEX = /^[a-zA-Z0-9]{3,15}$/;
  const PW_REGEX = /^[a-zA-Z0-9]{3,20}$/;
  const EMAIL_REGEX = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]{3,4}$/;

  const [validNick, setValidNick] = useState(false);
  const [validId, setValidId] = useState(false);
  const [validPw, setValidPw] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  useEffect(() => {
    const result = NICKNAME_REGEX.test(auth.nickname);
    setValidNick(result);
  }, [auth.nickname]);

  useEffect(() => {
    const result = ID_REGEX.test(auth.id);
    setValidId(result);
  }, [auth.id]);

  useEffect(() => {
    const result = PW_REGEX.test(auth.pw);
    setValidPw(result);
  }, [auth.pw]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(auth.email);
    setValidEmail(result);
  }, [auth.email]);

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
        ></UserInput>
        {!validNick ? (
          <p
            style={{
              color: 'red',
              lineHeight: 2.5,
            }}
          >
            올바르지 않은 형식입니다.
          </p>
        ) : (
          <p>사용 가능한 닉네임입니다.</p>
        )}

        <UserInput text="아이디" key="signId" name="id" UserInput={onChange} />
        {!validId ? (
          <p style={{color: 'red', lineHeight: 2.5}}>
            올바르지 않은 형식입니다.
          </p>
        ) : (
          <p>사용 가능한 아이디입니다.</p>
        )}
        <UserInput
          text="비밀번호"
          key="signPw"
          name="pw"
          UserInput={onChange}
        />
        {!validPw ? (
          <p style={{color: 'red', lineHeight: 2.5}}>
            올바르지 않은 형식입니다.
          </p>
        ) : (
          <p>사용 가능한 비밀번호입니다:)</p>
        )}
        <UserInput
          text="비밀번호 확인"
          key="signPwCheck"
          name="confirmPw"
          UserInput={onChange}
        />
        {auth.pw !== auth.confirmPw ? (
          <p style={{color: 'red', lineHeight: 2.5}}>
            입력하신 비밀번호와 다릅니다
          </p>
        ) : null}
        <UserInput
          text="이메일"
          key="signEmail"
          name="email"
          UserInput={onChange}
        />
        {!validEmail ? (
          <p style={{color: 'red', lineHeight: 2.5}}>
            올바르지 않은 형식입니다.
          </p>
        ) : (
          <p>사용 가능한 이메일입니다:)</p>
        )}
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
            disabled={validId}
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
