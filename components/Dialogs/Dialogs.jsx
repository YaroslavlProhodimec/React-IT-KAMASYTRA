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
	
let dialogsData = [
	{id:1, name:'Mariel'},
	{id:2, name:'Mavi'},
	{id:3, name:'Maria'}
]
let messagesData = [
	{id:1, messages:'Heloo'},
	{id:2, messages:'How are you'},
	{id:3, messages:'Salut'}
]
  return (
	<div className={s.wrapper}>
	<div className={s.items}>
	<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
	<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
	<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>

	
	
	</div>
	<div className={s.messages}>
	<Message message={messagesData[0].messages}/>
	<Message message={messagesData[1].messages}/>
	<Message  message={messagesData[2].messages}/>

	</div>
 </div>
);
};

export default Dialogs;
