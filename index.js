import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
let posts = [
	{id:1, messages:'Hi,how are you',likesCount:0},
	{id:2, messages:'It\'s my first post',likesCount:23},
	
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
