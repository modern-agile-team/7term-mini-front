import {Link} from 'react-router-dom/dist/umd/react-router-dom.development';
import NoRangLogo from './NoRangLogo';

export default function Header() {
  return (
    <>
      <Link to="/" className="HeaderSection">
        <NoRangLogo width="20vw" />
      </Link>
    </>
  );
}
