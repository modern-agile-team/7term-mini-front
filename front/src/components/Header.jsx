import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div className="Header">
      <div className="LogoBoxSize">
        <Link to="/">
          <img
            className="BeeHouse"
            src={require('../features/LogoLink.png')}
            art="BeeHouse"
          ></img>
        </Link>
      </div>
    </div>
  );
}
