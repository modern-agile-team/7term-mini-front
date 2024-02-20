import HomeButton from './HomeButton';
import NoRangLogo from '../entrie/NoRangLogo';

export default function HomePage() {
  return (
    <>
      <div className="body">
        <article className="HomeSection">
          <NoRangLogo width="35vw" />
          <HomeButton
            link="/login"
            name="Login"
            text="로그인"
            width="20vw"
            height="7vh"
          />
          <HomeButton
            link="/sign-in"
            name="Sign"
            text="회원가입"
            width="20vw"
            height="7vh"
          />
          <HomeButton
            link="/NORANG"
            name="NoneLogin"
            text="비회원으로 이용하기"
            width="20vw"
            height="7vh"
          />
        </article>
      </div>
    </>
  );
}
