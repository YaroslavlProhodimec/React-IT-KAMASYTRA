import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {

	let posts = [
		{id:1, messages:'Hi,how are you',likesCount:0},
		{id:2, messages:'It\'s my first post',likesCount:23},
		
	]

	let postsElements = posts.map(p=> <Post message={p.messages} likesCount={p.id}/>) 

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
       {postsElements}
        <Post />
      </div>
    </div>
  );
};
export default MyPosts;
