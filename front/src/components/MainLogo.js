import logo from '../assets/norang-logo.png';

export default function MainLogo(props) {
  return (
    <div className="mainLogo">
      <img
        className="mainLogoImg"
        src={logo}
        style={{width: props.width, height: props.height}}
      ></img>
    </div>
  );
}
