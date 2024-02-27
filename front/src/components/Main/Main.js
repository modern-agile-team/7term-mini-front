import * as React from 'react';

import NoRangLogo from '../entrie/NoRangLogo';
import Board from './Board';
import {Link} from 'react-router-dom';
import PostList from './PostList';
import PostView from './PostView';
import NewPost from './NewPost';

export default function Main(props) {
  return (
    <>
      <div className="body">
        <section className="leftSection">
          <Link to="/" className="leftLogoSection">
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
