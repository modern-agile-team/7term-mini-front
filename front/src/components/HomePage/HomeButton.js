import {Link} from 'react-router-dom';

export default function HomeButton(props) {
  return (
    <>
      <Link className="link" to={props.link}>
        <div
          style={{
            width: props.width,
            height: props.height,
            color: props.color,
            margin: props.margin,
          }}
          className="button"
          onClick={props.onClick}
        >
          {props.text}
        </div>
      </Link>
    </>
  );
}
