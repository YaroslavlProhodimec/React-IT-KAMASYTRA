import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.content}>
      <div className={s.item}>
        <img
          src="https://images.all-free-download.com/images/graphicwebp/user_astronaut_sign_icon_flat_contrast_black_white_sketch_6923675.webp"
          alt=""
        />{" "}
        {props.message}
		  <div><span>like</span> {props.likesCount}
		  </div> 
	
      </div>
    </div>
  );
};
export default Post;
