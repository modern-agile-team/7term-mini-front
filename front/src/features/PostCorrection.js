export default function PostCorrection(no, category, content) {
  fetch(process.env.REACT_APP_FETCH_CORRECTION_POST, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
    body: JSON.stringify({
      categoryNo: category,
      content: content,
    }),
  })
    .then(response => response.json())
    .then(result => {
      if (result.statusCode === 200) {
        window.location.reload();
      }
    })
    .catch(err => {
      console.log(err);
    });
}
