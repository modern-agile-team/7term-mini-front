import {Link} from 'react-router-dom';

export default function CategoriesButton(props) {
  return (
    <Link
      className="categoriesButton"
      to={props.link}
      style={{width: '80%', height: '6%'}}
    >
      <div>{props.text}</div>
    </Link>
  );
}
