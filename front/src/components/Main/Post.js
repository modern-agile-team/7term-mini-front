import Greaiting from '../entrie/Greaiting';
import UserComment from '../entrie/UserComment';
import Remove from './Remove';
import {Link} from 'react-router-dom';

export default function Post(props) {
  console.log(props);
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
          {props.props.content}
          <footer
            style={{
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'center',
              marginTop: '8vh',
            }}
          >
            <Greaiting
              width="1.5vw"
              margin="0 0.5vw"
              length={props.props.love_count}
            />
            <UserComment
              width="1.5vw"
              margin="0 0.5vw"
              length={props.props.comment_count}
            />
          </footer>
        </div>
      </Link>
    </>
  );
}
