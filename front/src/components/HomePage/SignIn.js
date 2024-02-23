import Header from './Header';
import UserInput from './UserInput';
import HomeButton from './HomeButton';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  function sign_in() {
    if (validNick && validId && validPw && validEmail) {
      fetch('http://15.164.231.77:3000/users/sign-up', {
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

  const [validNick, setValidNick] = useState(false);
  const [validId, setValidId] = useState(false);
  const [validPw, setValidPw] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  useEffect(() => {
    const NICKNAME_REGEX = /^[a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣0-9]{1,5}$/;
    const result = NICKNAME_REGEX.test(auth.nickname);
    setValidNick(result);
  }, [auth.nickname]);

  useEffect(() => {
    const ID_REGEX = /^[a-zA-Z0-9]{3,15}$/;
    const result = ID_REGEX.test(auth.id);
    setValidId(result);
  }, [auth.id]);

  useEffect(() => {
    const PW_REGEX = /^[a-zA-Z0-9]{3,20}$/;
    const result = PW_REGEX.test(auth.pw);
    setValidPw(result);
  }, [auth.pw]);

  useEffect(() => {
    const EMAIL_REGEX = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]{3,4}$/;
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
          justifyContent: 'flex-start',
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
        <span
          style={{
            color: '#FF9A9A',
            fontFamily: 'Cafe24SsurroundAir',
            fontSize: '70%',
          }}
        >
          {!validNick
            ? '5자 이하의 한글, 영어, 숫자로만 입력 가능합니다.'
            : '확인되었습니다.'}
        </span>

        <UserInput text="아이디" key="signId" name="id" UserInput={onChange} />
        <span
          style={{
            color: '#FF9A9A',
            fontFamily: 'Cafe24SsurroundAir',
            fontSize: '70%',
          }}
        >
          {!validId
            ? '3자 이상 15자 이하의 알파벳, 숫자로만 입력 가능합니다.'
            : '확인되었습니다.'}
        </span>
        <UserInput
          type="password"
          text="비밀번호"
          key="signPw"
          name="pw"
          UserInput={onChange}
        />
        <span
          style={{
            color: '#FF9A9A',
            fontFamily: 'Cafe24SsurroundAir',
            fontSize: '70%',
          }}
        >
          {!validPw ? '20자 이하로 입력 가능합니다.' : '확인되었습니다.'}
        </span>
        <UserInput
          type="password"
          text="비밀번호 확인"
          key="signPwCheck"
          name="confirmPw"
          UserInput={onChange}
        />
        <span
          style={{
            color: '#FF9A9A',
            fontFamily: 'Cafe24SsurroundAir',
            fontSize: '70%',
          }}
        >
          {auth.pw.length !== 0 &&
          auth.pw.length === auth.confirmPw.length &&
          auth.pw === auth.confirmPw
            ? '확인되었습니다.'
            : '입력하신 비밀번호가 다릅니다.'}
        </span>
        <UserInput
          text="이메일"
          key="signEmail"
          name="email"
          UserInput={onChange}
        />
        <span
          style={{
            color: '#FF9A9A',
            fontFamily: 'Cafe24SsurroundAir',
            fontSize: '70%',
          }}
        >
          {!validEmail
            ? '이메일 형식으로만 입력 가능합니다. (ex: a123@abc.abc)'
            : '확인되었습니다.'}
        </span>
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
            margin="20px 20px"
            onClick={sign_in}
            disabled={validId}
          />
          <HomeButton
            link="/"
            text="둘 다 안할래요"
            width="13vw"
            height="7vh"
            color="#FF9A9A"
            margin="20px 20px"
          />
          <HomeButton
            link="/login"
            text="로그인 하러 가기"
            width="13vw"
            height="7vh"
            margin="20px 20px"
          />
        </div>
      </div>
    </>
  );
}
