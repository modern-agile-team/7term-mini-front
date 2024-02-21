import * as React from 'react';
// Pagination from '@mui/material/Pagination';
//import Stack from '@mui/material/Stack';
import NoRangLogo from '../entrie/NoRangLogo';
import Board from './Board';
import {Link} from 'react-router-dom';
import WritePage from './WritePage';
//import PostView from './PostView';

//<Stack spacing={4}>
//              <Pagination count={10} showFirstButton showLastButton />
//           </Stack>

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
            <WritePage />
          </div>
        </section>
      </div>
    </>
  );
}
