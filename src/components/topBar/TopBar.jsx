import { Link } from 'react-router-dom';
import './TopBar.css';
import {
  FaInstagram,
  FaPinterest,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <FaYoutube className="topIcon" />
        <FaTwitter className="topIcon" />
        <FaInstagram className="topIcon" />
        <FaPinterest className="topIcon" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topList_item">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topList_item">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>

          <li className="topList_item">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>

          <li className="topList_item">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>

          <li className="topList_item">
            <Link className="link" to="/logout">
              {user && 'LOGOUT'}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src="/public/proffff.jpg" alt="top img" />
        ) : (
          <ul className="topList">
            <li className="topList_item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>

            <li>
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <FaSearch className="topSearchIcon" />
      </div>
    </div>
  );
}

export default TopBar;
