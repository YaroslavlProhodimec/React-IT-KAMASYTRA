import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {

	let postData = [
		{id:1, messages:'Hi,how are you',likesCount:0},
		{id:2, messages:'It\'s my first post',likesCount:23},
		
	]


  return (
    <div className={s.content}>
      <div>My post</div>
      <div>New post</div>
      <div>
        <textarea name="" id="" cols="40" rows="0"></textarea>
      </div>
      <div><button>Add post</button>
      <button>Remove</button></div>
      <div className={s.posts}>
        <Post message={postData[0].messages} likesCount={postData[0].likesCount} />
        <Post message={postData[1].messages } likesCount={postData[1].likesCount} />
        <Post />
      </div>
    </div>
  );
};
export default MyPosts;
