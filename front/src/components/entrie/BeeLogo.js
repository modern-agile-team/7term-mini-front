import logo from '../../assets/bee.png';

export default function BeeLogo(props) {
  return (
    <>
      <img
        style={{
          width: props.width,
          margin: props.margin,
        }}
        src={logo}
        alt="BEE"
      />
    </>
  );
}
