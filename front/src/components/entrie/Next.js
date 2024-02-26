import logo from '../../assets/next.png';

export default function Next(props) {
  return (
    <>
      <img
        style={{
          width: props.width,
          margin: props.margin,
        }}
        src={logo}
        alt="다음"
        onClick={props.onClick}
      />
    </>
  );
}
