import './header.css';
import Picture from "../../assets/pexels-anna-shvets-3851556.jpg"

export default function Index() {
  return (
    <header className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Avrya (React & Node)</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className='headerImg' src={Picture} />
    </header>
  );
}
