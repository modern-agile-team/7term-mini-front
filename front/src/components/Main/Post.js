import Greaiting from '../entrie/Greaiting';
import UserComment from '../entrie/UserComment';
import Remove from './Remove';
// import {Link} from 'react-router-dom';
// import PostDel from '../../features/PostDel';

export default function Post(props) {
  const {content, love_count, comment_count} = props;
  return (
    <>
      <div className="post">
        <header
          style={{
            display: 'flex',
            justifyContent: 'right',
            margin: '1vw 1vw 0vw 1vw',
          }}
        >
          <div>
            <Remove width="1.5vw" margin="0" />
          </div>
        </header>
        <div
          className="
postContent"
        >
          {content}
          <footer
            style={{
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'center',
              marginTop: '8vh',
            }}
          >
            <Greaiting width="1.5vw" margin="0 0.5vw" length={love_count} />
            <UserComment
              width="1.5vw"
              margin="0 0.5vw"
              length={comment_count}
            />
          </footer>
        </div>
      </div>
    </>
  );
}
