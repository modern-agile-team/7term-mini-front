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
<<<<<<< HEAD
      <span></span>
=======
      <span>{props.length}</span>
>>>>>>> 48033b5baa238e36dbd7714a7d3ab6125c124799
    </>
  );
}
