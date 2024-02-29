import PostDel from '../../features/PostDel';
import Greaiting from '../entrie/Greaiting';
import UserComment from '../entrie/UserComment';
import Remove from './Remove';
import {Link} from 'react-router-dom';

export default function Post(props) {
  const {content, love_count, comment_count, no} = props;
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
          <Link
            onClick={() => {
              PostDel(no);
            }}
          >
            <Remove width="1.5vw" margin="0" />
          </Link>
        </header>
        <Link to={`/detail-post?no=${no}`} className="postContent">
          {content}
          <footer
            style={{
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'center',
              marginTop: '8vh',
              marginRight: '1.5vw',
            }}
          >
            <Greaiting width="1.5vw" margin="0 0.5vw" length={love_count} />
            <UserComment
              width="1.5vw"
              margin="0 0.5vw"
              length={comment_count}
            />
          </footer>
        </Link>
      </div>
    </>
  );
}
