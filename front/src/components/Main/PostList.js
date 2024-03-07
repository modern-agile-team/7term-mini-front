import * as React from 'react';
import {useSearchParams} from 'react-router-dom';
import Post from './Post';
import LoadMainPage from '../../features/LoadMainPage';
import Previous from '../entrie/Previous';
import Next from '../entrie/Next';
import {Link} from 'react-router-dom';

export default function PostList() {
  const [data, setData] = React.useState([]);
  const [wholePage, setWholePage] = React.useState();
  const [page, setPage] = React.useState(1);
  const [searchParams] = useSearchParams();
  const [category, setCategory] = React.useState(0);

  React.useEffect(() => {
    setCategory(searchParams.get('category'));
    setPage(1);
  }, [searchParams]);

  React.useEffect(() => {
    LoadMainPage({current: page, no: category ? category : 0})
      .then(response => {
        setData(response.boards);
        setWholePage(response.wholePage);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [page, category]);

  function previous() {
    if (page > 1) {
      setPage(page => page - 1);
    } else {
      setPage(wholePage);
    }
  }

  function next() {
    if (page < wholePage) {
      setPage(page => page + 1);
    } else {
      setPage(1);
    }
  }

  return (
    <>
      {localStorage.getItem('accessToken') ? (
        <>
          {data.map((item, index) => (
            <Post {...data[index]} />
          ))}
          <div className="pageMove">
            <div onClick={previous}>
              <Previous width="2.8vw" margin="0 29vw 0 0" />
            </div>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1vh',
              }}
            >
              {page === 0 ? 1 : page + ' / ' + wholePage}
            </span>
            <div onClick={next}>
              <Next width="2.8vw" margin="0 0 0 29vw" />
            </div>
          </div>
        </>
      ) : (
        <>
          <Link
            to="/"
            style={{
              color: '#5C70DE',
              margin: '35vh 0vw',
              textAlign: 'center',
              fontSize: '4vh',
            }}
          >
            로그인 후에 이용 가능합니다.
            <br />
            <br />
            클릭 시 처음 페이지로 돌아갑니다.
          </Link>
        </>
      )}
    </>
  );
}
