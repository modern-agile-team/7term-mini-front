import CategoriesButton from './CategoriesButton';
import logo from '../assets/bee-logo.png';
import {Link} from 'react-router-dom';

export default function Categories(props) {
  return (
    <div
      className="categories"
      style={{width: props.width, height: props.height}}
    >
      <img src={logo} style={{width: '25%', height: '12.5%'}}></img>
      <span className="hello" style={{width: '80%', height: '6%'}}>
        방가방가
      </span>
      <div className="logoutMakepost">
        <Link className="logout" to>
          로그아웃
        </Link>
        <Link className="makepost" to>
          글쓰기
        </Link>
      </div>
      <CategoriesButton text="전체"></CategoriesButton>
      <CategoriesButton text="자유"></CategoriesButton>
      <CategoriesButton text="인기"></CategoriesButton>
      <CategoriesButton text="10대"></CategoriesButton>
      <CategoriesButton text="20대"></CategoriesButton>
      <CategoriesButton text="30대"></CategoriesButton>
    </div>
  );
}
