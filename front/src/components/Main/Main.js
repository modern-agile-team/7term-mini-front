import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import NoRangLogo from '../entrie/NoRangLogo';

export default function Main() {
  return (
    <>
      <div className="body">
        <section>
          <div className="logoSection">
            <NoRangLogo />
          </div>
          <div className="boardSection"></div>
        </section>
        <section>
          <div className="postSection">
            <div className="postView"></div>
            <Stack spacing={4}>
              <Pagination count={10} showFirstButton showLastButton />
            </Stack>
          </div>
        </section>
      </div>
    </>
  );
}
