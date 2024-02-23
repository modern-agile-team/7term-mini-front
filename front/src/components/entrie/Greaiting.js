import logo from '../../assets/greate.png';

export default function Greaiting(props) {
  return (
    <>
      <img
        style={{
          width: props.width,
          margin: props.margin,
        }}
        src={logo}
        alt="좋아요"
      />
      <span></span>
    </>
  );
}
