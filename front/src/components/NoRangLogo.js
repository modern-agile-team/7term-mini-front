import logo from '../assets/norang-logo.png';

export default function NoRangLogo(props) {
  return (
    <>
      <img
        style={{
          width: props.width,
          height: props.height,
        }}
        src={logo}
        alt="노랑"
      />
    </>
  );
}
