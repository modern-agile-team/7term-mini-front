import Header from './Header';
import UserInput from './UserInput';
import HomeButton from './HomeButton';

export default function SignIn() {
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
        <UserInput text="닉네임" key="signName" />
        <UserInput text="아이디" key="signId" />
        <UserInput text="비밀번호" key="signPw" />
        <UserInput text="비밀번호 확인" key="signPwCheck" />
        <UserInput text="이메일" key="signEmail" />
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
