import {useHistory} from 'react-router-dom';

export default function PostCorrection(no, category, content) {
  const history = useHistory();

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
        alert(result.message);
        history.go(0);
      }
    })
    .catch(err => {
      console.log(err);
    });
}
