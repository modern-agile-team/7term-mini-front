import NewAccessToken from './NewAccessToken';

export default function CommentDel(board_no, no) {
  console.log('dd');
  try {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      fetch(`http://15.164.231.77:3000/boards/${board_no}/comments/${no}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
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
