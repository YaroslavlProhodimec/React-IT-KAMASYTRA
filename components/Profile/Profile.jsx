import s from "./Profile.module.css";
import MyPosts from "./MyPost/MyPosts";
const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.imgone}>
        <a href="">
          <img
            className={s.imgtwo}
            src="https://images.all-free-download.com/images/graphicwebp/btc_sign_icon_flat_silhouette_sketch_6921320.webp"
          />
        </a>
        <a href="">
          <img
            className={s.imgtwo}
            src="https://images.all-free-download.com/images/graphicwebp/ethereum_currency_sign_icon_flat_silhouette_outline_6921322.webp"
          />
        </a>
        <a href="">
          <img
            className={s.imgtwo}
            src="https://images.all-free-download.com/images/graphicwebp/lira_sign_icon_black_flat_silhouette_sketch_6921286.webp"
          />
        </a>
        <a href="">
          <img
            className={s.imgtwo}
            src="https://images.all-free-download.com/images/graphicwebp/tenge_currency_sign_flat_black_white_sketch_6921348.webp"
          />
        </a>
      </div>
      <div>
        <img
          className={s.imgthree}
          src="https://w7.pngwing.com/pngs/56/235/png-transparent-computer-icons-organization-settings-man-computer-logo-desktop-wallpaper-thumbnail.png"
        />
      </div>
      <MyPosts />
    </div>
  );
};
export default Profile;
