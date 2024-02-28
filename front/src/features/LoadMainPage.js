import NewAccessToken from './NewAccessToken';

export default function LoadMainPage(props) {
  return new Promise((resolve, reject) => {
    try {
      fetch(
        `http://15.164.231.77:3000/boards/?currentPage=${props.current}&categoryNo=${props.no}&pageSize=3`,
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      )
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(response => {
          if (response.statusCode === 401) {
            NewAccessToken();
          }
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    } catch (err) {
      reject(err);
    }
  });
}
