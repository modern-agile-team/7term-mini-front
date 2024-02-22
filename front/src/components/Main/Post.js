import Greaiting from '../entrie/Greaiting';
import UserComment from '../entrie/UserComment';
import Remove from './Remove';
import {Link} from 'react-router-dom';

export default function Post() {
  const text1 =
    '동해물과 백두산이 마르고 닳도록 하느님이 보우 하사 우리나라 만세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 남산 위에 저소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 Hey 한국! Hey 한국! oh ohoh oh - 대! 한! 민! 국! 대! 한! 민! 국! 가을 하늘 공활한데 높고 구름없이 밝은 달은 우리 가슴 일편단심일세 무궁화 삼천리 화려 강산';
  return (
    <>
      <Link to="/detail-post" className="post">
        <header
          style={{
            display: 'flex',
            justifyContent: 'right',
            margin: '1vw 1vw 0vw 1vw',
          }}
        >
          <Link to="#">
            <Remove width="1.5vw" margin="0" />
          </Link>
        </header>
        <div
          className="
postContent"
        >
          {text1}
          <footer
            style={{
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'center',
              marginBottom: '50px',
            }}
          >
            <Greaiting width="1.5vw" margin="0 0.5vw" /> <span>1</span>
            <UserComment width="1.5vw" margin="0 0.5vw" /> <span>2</span>
          </footer>
        </div>
      </Link>
    </>
  );
}
