import s from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return <div className={s.item}><NavLink  to={path} className={({ isActive }) => isActive ? s.active : undefined}>{props.name}</NavLink></div>
}
const Message = (props) => {
	return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
	
  return (
	<div className={s.wrapper}>
	<div className={s.items}>
	<DialogItem name="Mariel" id='1'/>
	<DialogItem name="Mavi" id='2'/>
	<DialogItem name="Maria" id='3'/>

	
	
	</div>
	<div className={s.messages}>
	<Message message="Heloo"/>
	<Message message="How are you"/>
	<Message message="Salut"/>

	</div>
 </div>
);
};

export default Dialogs;
