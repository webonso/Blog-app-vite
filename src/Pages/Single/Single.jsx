import './single.css';
import SideBar from '../../components/sideBar/SideBar';
import SinglePost from '../../components/singlePost/SinglePost';

function Single() {
  return (
    <div className="single">
      <SinglePost/>
      <SideBar />
    </div>
  );
}

export default Single;
