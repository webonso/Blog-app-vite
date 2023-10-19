import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import './singlePost.css';
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/18092504/pexels-photo-18092504.jpeg?h=750&w=700&dpr=1&auto=compress"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Getting the best of Beauty Summer
          <div className="singlePostEdit">
            <FaEdit className="singlePostIcon" />
            <AiFillDelete className="singlePostIcon" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Jimmy Penguin</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          I'm a passionate writer and a dedicated explorer of [Your
          Niche/Interests]. I've always been drawn to [mention your passion or
          interest], and I find immense joy in sharing my insights with others.
          Whether it's [mention specific topics], [mention another interest], or
          [mention another interest], I'm committed to providing you with
          valuable, engaging content. Why [Your Blog Name]? [Your Blog Name] is
          a place where I can express my creativity and connect with people who
          share my interests. It's more than just a blog; it's a community of
          like-minded individuals who are curious, enthusiastic, and eager to
          learn. Through my articles, I hope to inspire, inform, and entertain
          you. What Can You Expect from [Your Blog Name]? Here at [Your Blog
          Name], you'll find a diverse range of content, including:
        </p>
      </div>
    </div>
  );
}
