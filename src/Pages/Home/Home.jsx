import './Home.css';

import Header from '../../components/Header';
import SideBar from '../../components/sideBar/SideBar';
import Posts from '../../components/posts/Posts';

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}
