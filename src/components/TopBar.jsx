import './TopBar.css';
import { FaBeer, FaYoutube } from 'react-icons/fa';


function TopBar() {
  return (
    <div className="top">
      <div className="top-Left">
     <FaYoutube/>
      <FaBeer/>
      
     
      </div>
      <div className="top-Center">c</div>
      <div className="top-Right">r</div>
    </div>
  );
}

export default TopBar;
