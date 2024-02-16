import {Link} from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div className="registerbox">
      <div CloseDiv>
        <Link to="/">
          <img
            className="closebtn"
            src={require('../features/CloseBtn.png')}
            alt="CloseBtn"
          ></img>
        </Link>
      </div>
      <div className="inputcreateaccount">
        <p className="createaccountstring">회 원 가 입</p>
        <div className="inputnamediv">
          이름
          <input className="inputname"></input>
        </div>
        <div className="inputiddiv">
          아이디
          <input className="inputid"></input>
        </div>
        <div className="inputpassworddiv">
          비밀번호
          <input className="inputpassword" type="password"></input>
        </div>
        <div className="inputconfirmpassworddiv">
          비밀번호 확인
          <input className="inputconfirmpassword" type="password"></input>
        </div>
        <div className="inputemaildiv">
          이메일
          <input className="inputemail"></input>
        </div>
        <div className="inputcomplete"> 회원 가입 </div>
        <Link
          to="Login_Page"
          className="gologin"
          style={{textDecoration: 'none'}}
        >
          <div>로그인 하러 가기</div>
        </Link>
      </div>
    </div>
  );
}
