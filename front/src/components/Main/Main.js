import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Main() {
  return (
    <>
      <div className="body">
        <section>
          <div className="logoSection"></div>
          <div className="boardSection"></div>
        </section>
        <section>
          <div className="postSection">
            <div className="postView"></div>
            <Stack spacing={2}>
              <Pagination count={10} />
              <Pagination count={10} color="primary" />
              <Pagination count={10} color="secondary" />
              <Pagination count={10} disabled />
            </Stack>
          </div>
        </section>
      </div>
    </>
  );
}
