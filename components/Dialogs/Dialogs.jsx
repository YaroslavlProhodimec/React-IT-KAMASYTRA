import s from "./Dialogs.module.css"
import DialogItem from "./Dialogitem/DialogItem"
import Message from "./Message/Message"



const Dialogs = () => {
	
let dialogs = [
	{id:1, name:'Mariel'},
	{id:2, name:'Mavi'},
	{id:3, name:'Maria'}
]
let messages = [
	{id:1, messages:'Heloo'},
	{id:2, messages:'How are you'},
	{id:3, messages:'Salut'}
]
let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
 
let messagesElements = messages.map(m => <Message message={m.messages} id={m.id} />);

  return (
	<div className={s.wrapper}>
	<div className={s.items}>
	{dialogsElements}
	</div>
	<div className={s.messages}>
	{messagesElements}

	</div>
 </div>
);
};

export default Dialogs;
