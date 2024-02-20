import logo from '../../assets/remove.png';

export default function Remove(props) {
  return (
    <>
      <img
        style={{
          width: props.width,
          margin: props.margin,
        }}
        src={logo}
        alt="exit"
      />
    </>
  );
}
