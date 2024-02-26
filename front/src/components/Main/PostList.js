import * as React from 'react';

import Post from './Post';
import LoadMainPage from '../../features/LoadMainPage';
import Previous from '../entrie/Previous';
import Next from '../entrie/Next';

export default function PostList() {
  const [data, setData] = React.useState([]);
  //const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    LoadMainPage({current: 1, no: 0})
      .then(response => {
        setData(response.boards);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  function testOne() {
    console.log('클릭');
  }

  return (
    <>
      <Post props={data[0]} />
      <Post props={data[1]} />
      <Post props={data[2]} />
      <div className="pageMove">
        <Previous width="2.8vw" margin="0 30vw" onClink={testOne} />
        <Next width="2.8vw" margin="0 30vw" onClink={testOne} />
      </div>
    </>
  );
}
