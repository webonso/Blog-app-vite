import './Sidebar.css';
import myImg from '../../assets/Hero_banner.png';
import {
    FaInstagram,
    FaPinterest,
    FaTwitter,
    FaYoutube,
  } from 'react-icons/fa';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src={myImg} alt='my picture'/>
        <p>
          Welcome to Avrya Blog! I'm Jimmy TechBos, the creative mind behind
          this blog. I'm excited to share my thoughts, experiences, and
          knowledge with you as we embark on this journey together. Who Am I?
          I'm a passionate writer and a dedicated explorer
          {/* of [Your Niche/Interests]. I've always been drawn to [mention your
          passion or interest], and I find immense joy in sharing my insights
          with others. Whether it's [mention specific topics], [mention another
          interest], or [mention another interest], I'm committed to providing
          you with valuable, engaging content. */}
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className='sidebarListItem'>LifeStyles</li>
            <li className='sidebarListItem'>Sports</li>
            <li className='sidebarListItem'>Entertainment</li>
            <li className='sidebarListItem'>Politics</li>
            <li className='sidebarListItem'>Cinema</li>
            <li className='sidebarListItem'>Technology</li>
          </ul>
      </div>

      <div className='sidebarItem'>
      <span className="sidebarTitle">FOLLOW US</span>
       <div className='sidebarSocial'>
        <FaYoutube className='sidebarIcon'/>
        <FaTwitter className='sidebarIcon'/>
        <FaInstagram className='sidebarIcon'/>
        <FaPinterest className='sidebarIcon'/>
      </div>
      </div>
    </div>
  );
}

export default SideBar;

