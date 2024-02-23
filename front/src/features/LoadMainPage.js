export default function LoadMainPage(props) {
  try {
    fetch(
      `http://15.164.231.77:3000/boards/?currentPage=${props.current}&categoryNo=${props.no}&pageSize=${props.size}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    )
      .then(response => response.json())
      .then(response => {
        return response;
      });
  } catch (err) {
    console.log(err);
  }
}
