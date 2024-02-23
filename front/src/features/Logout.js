export default function Logout() {
  try {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      fetch(`http://15.164.231.77:3000/auth/logout`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
        .then(response => response.json())
        .then(response => {
          alert(response.message);
        });
    }
  } catch (err) {
    console.log(err);
  }
}
