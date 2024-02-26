import * as React from 'react';

import Post from './Post';
import LoadMainPage from '../../features/LoadMainPage';
import Previous from '../entrie/Previous';
import Next from '../entrie/Next';

export default function PostList() {
  const [data, setData] = React.useState([]);
  const [wholePage, setWholePage] = React.useState();
  const [page, setPage] = React.useState(1);

  console.log(data);

  React.useEffect(() => {
    LoadMainPage({current: page, no: 0})
      .then(response => {
        setData(response.boards);
        setWholePage(response.wholePage);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [page]);

  function previous() {
    if (page > 0) {
      setPage(page => page - 1);
    } else {
      alert('첫 번째 페이지입니다.');
    }
  }

  function next() {
    if (page < wholePage) {
      setPage(page => page + 1);
    } else {
      alert('마지막 페이지입니다.');
    }
  }

  return (
    <>
      {data.map((item, index) => (
        <Post {...data[index]} />
      ))}
      <div className="pageMove">
        <div onClick={previous}>
          <Previous width="2.8vw" margin="0 30vw" />
        </div>
        {page}
        <div onClick={next}>
          <Next width="2.8vw" margin="0 30vw" />
        </div>
      </div>
    </>
  );
}
