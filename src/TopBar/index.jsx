import './TopBar.css';
import {
  FaInstagram,
  FaPinterest,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

function Index() {
  return (
    <div className="top">
      <div className="topLeft">
        <FaYoutube className='topIcon'/>
        <FaTwitter className='topIcon'/>
        <FaInstagram className='topIcon'/>
        <FaPinterest className='topIcon'/>
      </div>
      <div className="topCenter">
        <ul className='topList'>
          <li className='topList_item'>HOME</li>
          <li className='topList_item'>ABOUT</li>
          <li className='topList_item'>CONTACT</li>
          <li className='topList_item'>WRITE</li>
          <li className='topList_item'>LOGOUT</li>
          
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src='/public/proffff.jpg'/>
        <FaSearch className='topSearchIcon'/>
      </div>
    </div>
  );
}

export default Index;
