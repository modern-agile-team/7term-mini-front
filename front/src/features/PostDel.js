import NewAccessToken from './NewAccessToken';

async function performDelete(props) {
  return fetch(`http://15.164.231.77:3000/boards/${props}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
}

export default async function PostDel(props) {
  try {
    if (window.confirm('게시글을 삭제하시겠습니까? (작성자만 가능합니다.)')) {
      const response = await performDelete(props);
      const responseData = await response.json();

      if (response.status === 200) {
        window.location.reload();
        alert(responseData.message);
      } else if (response.status === 401) {
        await NewAccessToken();
        const retryResponse = await performDelete(props);
        const retryData = await retryResponse.json();
        window.location.reload();
        alert(retryData.message);
      } else if (response.status === 403) {
        alert(responseData.message);
      }
    }
  } catch (err) {
    console.log(err);
  }
}
