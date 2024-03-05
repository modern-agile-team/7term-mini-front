export default function NewAccessToken() {
  return fetch(
    process.env.REACT_APP_FETCH_POST +
      process.env.REACT_APP_AUTH +
      process.env.REACT_APP_NEW_TOKEN,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
      },
    },
  )
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
