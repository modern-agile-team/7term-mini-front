import logo from '../../assets/pencil.png';

export default function Pencil(props) {
  return (
    <>
      <img
        style={{
          width: props.width,
          margin: props.margin,
        }}
        src={logo}
        alt="연필"
      />
    </>
  );
}
