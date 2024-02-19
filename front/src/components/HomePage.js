import HomeButton from './HomeButton';
import NoRangLogo from './NoRangLogo';

export default function HomePage() {
  return (
    <>
      <div className="body">
        <article className="homePage">
          <NoRangLogo width="35vw" />
          <HomeButton link="/login" name="Login" text="로그인" />
          <HomeButton link="/sign-in" name="Sign" text="회원가입" />
          <HomeButton
            link="/NORANG"
            name="NoneLogin"
            text="비회원으로 이용하기"
          />
        </article>
      </div>
    </>
  );
}
