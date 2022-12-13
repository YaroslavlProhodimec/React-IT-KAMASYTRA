import s from "./MyPosts.module.css";
import Post from "./Post/Post"
const MyPosts = () => {
  return <div className={s.content}>
      
      <div>My post</div>
      <div>New post</div>
		<textarea name="" id="" cols="40" rows="0"></textarea>
		<button>Add post</button>
		<button>Remove</button>
		<div className={s.posts}>
<Post />
<Post />
<Post />
    </div>
	 </div>
};
export default MyPosts;
