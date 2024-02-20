import MainLogo from './MainLogo';
import Categories from './Categories';

export default function Main() {
  return (
    <div className="mainBody">
      <MainLogo width="75%" height="80%"></MainLogo>
      <Categories width="100%" height="80%"></Categories>
      <div>
        게시판<div>게시글</div>
      </div>
    </div>
  );
}
