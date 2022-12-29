import s from "./Dialogs.module.css"
import DialogItem from "./Dialogitem/DialogItem"
import Message from "./Message/Message"



const Dialogs = (props) => {
	

let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
 
let messagesElements = props.messages.map(m => <Message message={m.messages} id={m.id} />);

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
