import './post.css';

function Post() {
  return (
    <div className="post">
      <img className='postImg'
        src="https://images.pexels.com/photos/3764538/pexels-photo-3764538.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="post image"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span
          className="postTitle">Lover's Sports </span>
          <hr/>
          <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>I value your thoughts, ideas, and feedback, so don't hesitate to leave comments on my posts. You can also connect with me on [mention 
          your social media platforms] to stay updated on the latest content and engage in discussions with our growing community. 
          Thank you for visiting [Your Blog Name]. I look forward to sharing this exciting journey with you, and I hope you find inspiration, information, 
          and enjoyment within these virtual pages. Stay curious, stay inspired!</p>
    </div>
  );
}

export default Post;
