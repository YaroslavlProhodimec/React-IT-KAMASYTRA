import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.content}>
      <div className={s.item}>
        <img
          src="https://images.all-free-download.com/images/graphicwebp/user_astronaut_sign_icon_flat_contrast_black_white_sketch_6923675.webp"
          alt=""
        />{" "}
        Post 1
		  <div><span>like</span></div>
	
      </div>
    </div>
  );
};
export default Post;
