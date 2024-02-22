import {Link} from 'react-router-dom';
import Remove from './Remove';
import moment from 'moment';

export default function PostView() {
  const nowTime = moment().format('YYYY-MM-DD HH:mm');
  return (
    <>
      <div className="greenBox">
        <div className="postViewHeader">
          <span># 페이지번호 :: {nowTime}</span>
          <Link to="/NORANG">
            <Remove width="2vw" margin="0px 10px" />
          </Link>
        </div>
        <div className="postViewBody">본문</div>
        <div className="postViewfooter">수정하기</div>
      </div>
    </>
  );
}
