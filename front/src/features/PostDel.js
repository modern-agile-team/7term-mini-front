import NewAccessToken from './NewAccessToken';

export default function PostDel(props) {
  try {
    if (window.confirm('게시글을 삭제하시겠습니까? (작성자만 가능합니다.)')) {
      fetch(`http://15.164.231.77:3000/boards/${props}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
        .then(response => response.json())
        .then(response => {
          if (response.statusCode === 200) {
            window.location.reload();
            alert(response.message);
          } else if (response.statusCode === 401) {
            NewAccessToken();
          } else if (response.statusCode === 403) {
            alert(response.message);
          }
        });
    }
  } catch (err) {
    console.log(err);
  }
}
