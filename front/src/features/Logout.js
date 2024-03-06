import NewAccessToken from './NewAccessToken';

async function performLogout() {
  return fetch(process.env.REACT_APP_FETCH_LOGOUT, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
}

export default async function Logout() {
  try {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      const response = await performLogout();
      const responseData = await response.json();

      if (response.status === 401 && responseData.statusCode === 401) {
        console.log('엑세스토큰재발급');
        await NewAccessToken();
        const retryResponse = await performLogout();
        const retryData = await retryResponse.json();
        window.localStorage.clear();
        alert(retryData.message);
      } else {
        window.localStorage.clear();
        alert(responseData.message);
      }
    }
  } catch (err) {
    console.log(err);
  }
}
