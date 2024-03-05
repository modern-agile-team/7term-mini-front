import logo1 from '../../assets/greate.png';
import logo2 from '../../assets/greate_on.png';

export default function Greaiting(props) {
  function get_love_mark() {
    fetch(process.env.REACT_APP_FETCH_POST + props.no, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then(response => response.json())
      .then(result => {
        if (!result.userLoveMark) {
          fetch(
            process.env.REACT_APP_FETCH_POST +
              props.no +
              process.env.REACT_APP_LOVE,
            {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              },
            },
          )
            .then(response => response.json())
            .then(result => {
              console.log('좋아요');
              window.location.reload();
            })
            .catch(err => {
              alert(err);
            });
        } else {
          fetch(
            process.env.REACT_APP_FETCH_POST +
              props.no +
              process.env.REACT_APP_LOVE,
            {
              method: 'DELETE',
              headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              },
            },
          )
            .then(result => {
              if (result) console.log('좋아요 취소');

              window.location.reload();
            })
            .catch(err => {
              alert(err);
            });
        }
      })
      .catch(err => {
        alert(err);
      });
  }

  return (
    <>
      <img
        style={{
          width: props.width,
          margin: props.margin,
        }}
        src={props.love ? logo2 : logo1}
        alt="좋아요"
        onClick={() => {
          get_love_mark();
        }}
      />
      <span>{props.length}</span>
    </>
  );
}
