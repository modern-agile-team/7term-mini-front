import NewAccessToken from './NewAccessToken';

export default function CommentDel(board_no, no) {
  console.log('dd');
  try {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      fetch(
        process.env.REACT_APP_FETCH_POST +
          board_no +
          process.env.REACT_APP_COMMENTS +
          no,
        {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      )
        .then(response => response.json())
        .then(response => {
          if (response.status === 401 && response.statusCode === 401) {
            console.log('엑세스토큰재발급');
            NewAccessToken();
          }
          window.location.reload();
        });
    }
  } catch (err) {
    console.log(err);
  }
}
