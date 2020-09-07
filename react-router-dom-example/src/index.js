import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch, Link, NavLink, useParams} from 'react-router-dom'

function Home(){
  return(
    <div>
      <h2>Home</h2>
      Home..
    </div>
  )
}
var contents = [
  {id:1, title:'HTML', description:'HTML is ...'  },
  {id:2, title:'JS', description:'JS is ...'  },
  {id:3, title:'React', description:'React is ...'  }
]
function Topic(){
  var params = useParams();
  var topic_id = params.topic_id;
  var selected_topic = {
    title:'Sorry',
    description: 'Not found'
  }
  for(var i=0;i<contents.length;i++){
    if(contents[i].id === Number(topic_id)){
      selected_topic = contents[i];
      break;
    }
  }
  console.log('params', params)
  return(
      <div>
        <h3>{selected_topic.title}</h3>
        {selected_topic.description}
      </div>
  );
}
function Topics(){
  var lis = [] ;
  for ( var i=0; i<contents.length;i++){
    lis.push(<li key={contents[i].id}><NavLink to = {'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>)
  }
  return(
    <div>
      <h2>Topics</h2>
      <ul>
        {/* <li><NavLink to ="/topics/1">HTML</NavLink></li>
        <li><NavLink to ="/topics/2">JS</NavLink></li>
        <li><NavLink to ="/topics/3">React</NavLink></li> */}
        {lis}
      </ul>
      <Route path= "/topics/:topic_id">
        <Topic></Topic>
      </Route>
      {/* <Switch>
        <Route path="/topics/1">HTML is ...</Route>
        <Route path="/topics/2">JS is ...</Route>
        <Route path="/topics/3">React is ...</Route>
      </Switch> */}
    </div>
  )
}

function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      Contact..
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <ul>
        {/* <li><a href="/">Home</a></li>
        <li><a href="/Topics">Topics</a></li>
        <li><a href="/Contact">Contact</a></li> */}
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/Topics">Topics</Link></li>
        <li><Link to="/Contact">Contact</Link></li> */}
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/Topics">Topics</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/Topics"><Topics></Topics></Route>
        <Route path="/Contact"><Contact></Contact></Route>
        <Route path="/">Not found</Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(<React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
