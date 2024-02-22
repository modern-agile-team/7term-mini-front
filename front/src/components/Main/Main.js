import * as React from 'react';

import NoRangLogo from '../entrie/NoRangLogo';
import Board from './Board';
import {Link} from 'react-router-dom';
import PostList from './PostList';

export default function Main() {
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
            <PostList />
          </div>
        </section>
      </div>
    </>
  );
}
