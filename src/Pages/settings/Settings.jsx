import './settings.css';
import SideBar from '../../components/sideBar/SideBar';
import Prof from '../../../public/proffff.jpg';
import { FaUser } from 'react-icons/fa';

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Acount</span>
          <span className="settingsDeleteTitle">Delete Acount</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img className="settingsImg" src={Prof} />
            <label htmlFor="fileInput">
              <FaUser className="settingsPPIcon" />
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Jimmy Penn" />
          <label>Email:</label>
          <input type="email" placeholder="jimmypenn@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
