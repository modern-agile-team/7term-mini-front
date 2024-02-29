import NewAccessToken from './NewAccessToken';

export default async function LoadMainPage(props) {
  try {
    const response = await fetch(
      `http://15.164.231.77:3000/boards/?currentPage=${props.current}&categoryNo=${props.no}&pageSize=3`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );

    if (!response.ok) {
      if (response.status === 401) {
        await NewAccessToken();
      }
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
