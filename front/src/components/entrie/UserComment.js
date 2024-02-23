import logo from '../../assets/comment.png';

export default function UserComment(props) {
  return (
    <>
      <img
        style={{
          width: props.width,
          margin: props.margin,
        }}
        src={logo}
        alt="댓글"
      />
      <span>props.length</span>
    </>
  );
}
