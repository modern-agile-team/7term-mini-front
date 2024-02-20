import {useState} from "react"
import Header from './Header';
import HomeButton from './HomeButton';
import LoginBody from './LoginBody';
import UserInput from './UserInput';

export default function Login() {
  const [loginId, setLoginn] = useState();

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
        <UserInput text="아이디" key="loginId" />
        <UserInput text="비밀번호" key="loginPassword" />
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
