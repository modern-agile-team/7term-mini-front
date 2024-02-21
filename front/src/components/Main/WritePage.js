import Remove from './Remove';
import moment from 'moment';
import 'moment/locale/ko';
import BeeLogo from '../entrie/BeeLogo';

export default function WritePage() {
  const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
  return (
    <>
      <div className="greenBox">
        <div className="postInfo">
          {nowTime}
          <Remove width="2vw" margin="0px 10px" />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="postHeader">
            <BeeLogo width="3vw" />
            <div className="categorySelect"></div>
          </div>
        </div>
      </div>
    </>
  );
}
