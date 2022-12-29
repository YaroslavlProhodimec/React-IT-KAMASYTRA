import s from "./Profile.module.css";
import MyPosts from "./MyPost/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";
const Profile = (props) => {
  return (
    <div >
      <Profileinfo/>
      <MyPosts posts={props.posts}/>
    </div>
  );
};
export default Profile;
