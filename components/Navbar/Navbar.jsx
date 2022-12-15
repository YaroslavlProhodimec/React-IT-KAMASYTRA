import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = () => {
  return (
  < nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/profile"  className={({ isActive }) => isActive ? s.active : undefined}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" className={({ isActive }) => isActive ? s.active : undefined}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news">News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="music">Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="notes">Notes</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="favorites">Favorites</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="settings">Settings</NavLink>
        </div>
      </nav>
  );
};
export default Navbar;
