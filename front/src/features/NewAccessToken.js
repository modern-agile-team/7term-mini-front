export default function NewAccessToken() {
  return fetch(`http://15.164.231.77:3000/auth/new-access-token`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
    },
  })
    .then(response => {
      console.log('액세스토큰 재발행');
      return response.json();
    })
    .then(result => {
      if (result.accessToken) {
        localStorage.setItem('accessToken', result.accessToken);
      }
      window.location.reload();
    })
    .catch(err => {
      console.log(err);
    });
}
