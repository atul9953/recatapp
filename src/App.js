/* import './App.css';
import {NavBar} from './component/navBar';
import {ItemList} from './component/itemlist';
function App() {
  let name1 = "Aaryan";
  let name2 = "Arush";
  return (
    <>
      <NavBar name={name1} name1={name2}/>
      <ItemList/>
    </>
  );
}
export default App; */



import './App.css';
import {NavBar} from './component/navBar';
import {ItemList} from './component/itemlist';
import { AddTodo } from './component/addTodo';
import {About} from './component/about'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
function App() {
  let name1 = "Aaryan";
  let name2 = "Arush";
  return (
    <>
      <NavBar name={name1} name1={name2}/>
     
      <ItemList/>
      
    </>
  );
}
export default App;