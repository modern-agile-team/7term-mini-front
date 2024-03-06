import {useSearchParams} from 'react-router-dom';

export default function PostCorrection(no, category, content) {
  const [setparams] = useSearchParams(0);
  const no1 = setparams.get('no');

  fetch(process.env.REACT_APP_FETCH_POST + no1, {
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
