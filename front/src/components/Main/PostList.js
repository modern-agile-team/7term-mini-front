import Pagination from '@mui/material/Pagination';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Post from './Post';

export default function PostList() {
  return (
    <>
      <Post />
      <Post />
      <Post />
      <Stack spacing={4}>
        <Pagination count={10} showFirstButton showLastButton />
      </Stack>
    </>
  );
}
