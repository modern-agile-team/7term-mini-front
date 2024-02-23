import {Link} from 'react-router-dom/dist/umd/react-router-dom.development';
import NoRangLogo from '../entrie/NoRangLogo';

export default function Header() {
  return (
    <>
      <Link to="/" className="HeaderSection">
        <NoRangLogo width="17vw" />
      </Link>
    </>
  );
}
