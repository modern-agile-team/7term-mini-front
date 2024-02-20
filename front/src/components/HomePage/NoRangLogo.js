import logo from '../../assets/norang-logo.png';

export default function NoRangLogo(props) {
  return (
    <>
      <img
        style={{
          width: props.width,
        }}
        src={logo}
        alt="노랑"
      />
    </>
  );
}
