export default function NewAccessToken() {
  return fetch(`http://15.164.231.77:3000/auth/new-access-token`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
    },
  })
    .then(response => {
      return response.json();
    })
    .then(result => {
      if (result.accessToken) {
        localStorage.setItem('accessToken', result.accessToken);
      }
    })
    .catch(err => {
      console.log(err);
    });
}
//errocode : 401
