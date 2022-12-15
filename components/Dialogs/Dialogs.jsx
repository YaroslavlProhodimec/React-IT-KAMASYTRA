import s from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom';
const Dialogs = () => {
	
  return (
	<div className={s.wrapper}>
	<div className={s.items}>
	<div className={s.item}><NavLink  to="/dialogs/1" className={({ isActive }) => isActive ? s.active : undefined}>Mariel</NavLink></div>
	<div className={s.item}><NavLink to="/dialogs/2" className={({ isActive }) => isActive ? s.active : undefined}>Mavi</NavLink></div>
	<div className={s.item}><NavLink to="/dialogs/3" className={({ isActive }) => isActive ? s.active : undefined}>Maria</NavLink></div>
	
	</div>
	<div className={s.messages}>
	<div className={s.message}>Hi bro</div>
	<div className={s.message}>How are you?</div>
	<div className={s.message}>Salyt</div>
	</div>
 </div>
);
};

export default Dialogs;
