import {Link} from 'react-router-dom';

export default function FirstPage() {
  return (
    <div className="homePageBox">
      <div className="High"></div>
      <Link
        to="login_page"
        style={{textDecoration: 'none'}}
        className="LoginPagelink"
      >
        <p className="FirstPageFont">로그인</p>
      </Link>
      <Link
        to="register_page"
        style={{textDecoration: 'none'}}
        className="RegisterPagelink"
      >
        <p className="FirstPageFont">회원가입</p>
      </Link>
      <Link
        to="nonmember_page"
        style={{textDecoration: 'none'}}
        className="NonMemberPagelink"
      >
        <p className="FirstPageFont">비회원으로 이용하기</p>
      </Link>
      <div className="low"></div>
    </div>
  );
}
