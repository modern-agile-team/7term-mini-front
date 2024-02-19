import {Link} from 'react-router-dom';

export default function HomeButton(props) {
  return (
    <>
      <Link className="link" to={props.link}>
        <div className="button">{props.text}</div>
      </Link>
    </>
  );
}
