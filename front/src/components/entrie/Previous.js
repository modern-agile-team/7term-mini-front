import logo from '../../assets/previous.png';

export default function Previous(props) {
  return (
    <>
      <img
        style={{
          width: props.width,
          margin: props.margin,
        }}
        src={logo}
        alt="이전"
        onClick={props.onClick}
      />
    </>
  );
}
