import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {robots} from './robots';


import './index.css';
import Card from "./Card.js";

ReactDOM.render(
  <div>
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} picture={'https://robohash.org/1?200x200'}/>
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} picture={'https://robohash.org/2?200x200'}/>
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} picture={'https://robohash.org/3?200x200'}/>
      <Card id={robots[3].id} name={robots[3].name} email={robots[3].email} picture={'https://robohash.org/4?200x200'}/>
      <Card id={robots[4].id} name={robots[4].name} email={robots[4].email} picture={'https://robohash.org/5?200x200'}/>
  </div>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
