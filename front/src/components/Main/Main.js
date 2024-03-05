import * as React from 'react';
import {Link} from 'react-router-dom';
import NoRangLogo from '../entrie/NoRangLogo';
import Board from './Board';
import PostList from './PostList';
import PostView from './PostView';
import NewPost from './NewPost';

export default function Main(props) {
  console.log(process.env.REACT_APP_FETCH_POST_DEL);
  return (
    <>
      <div className="body">
        <section className="leftSection">
          <Link to="/NORANG" className="leftLogoSection">
            <NoRangLogo width="15vw" margin="6px 5px" />
          </Link>
          <div className="leftBoardSection">
            <Board />
          </div>
        </section>
        <section>
          <div className="rightSection">
            {props.page === 'detailPost' ? (
              <PostView />
            ) : props.page === 'newPost' ? (
              <NewPost />
            ) : (
              <PostList />
            )}
          </div>
        </section>
      </div>
    </>
  );
}
