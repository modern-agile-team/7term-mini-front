export default function PostCorrection(no, category, content) {
  fetch(`http://15.164.231.77:3000/boards/${no}`, {
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
