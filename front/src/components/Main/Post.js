import PostDel from '../../features/PostDel';
import Greaiting from '../entrie/Greaiting';
import UserComment from '../entrie/UserComment';
import Remove from './Remove';
import {Link} from 'react-router-dom';

export default function Post(props) {
  const {content, love_count, comment_count, no, created_at, nickname} = props;

  return (
    <>
      <div className="post">
        <header
          style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            margin: '1vw 1vw 0vw 1vw',
          }}
        >
          <span
            style={{
              fontSize: '70%',
              fontFamily: 'Cafe24SsurroundAir',
              marginRight: '1vw',
              marginBottom: '0.5vh',
            }}
          >
            {nickname + ' :: ' + created_at}
          </span>
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
        </Link>
        <footer
          style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            marginTop: '8vh',
            marginRight: '1.5vw',
          }}
        >
          <Greaiting
            width="1.5vw"
            margin="0 0.5vw"
            no={no}
            length={love_count}
          />
          <UserComment width="1.5vw" margin="0 0.5vw" length={comment_count} />
        </footer>
      </div>
    </>
  );
}
