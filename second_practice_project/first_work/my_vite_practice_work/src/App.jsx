import { useState } from 'react'
import './App.css'
import TheState from './components/first';
import Second from './components/second';
import UseStateObject from './components/third';
import UserChallenge from './components/fifth';
import ControlledInputs from './components/forth';
import MultipleInputs from "./components/six";
import UncontrolledInputs from './components/seventh';
import BirthDay from './components/birthday';
import EightPrevNext from './components/eight';
import Accordion from './components/nine';
import Carousel from './components/carousel';
import FormTwo from './components/formTwo';
import ItemOne from './components/itemOne';

// importing of codes from this-is-for-navbar folder starts here
import FirstNav from './this-is-for-navbar-work/firstnav';



//this code from here is for formTwo.jsx and it starts here

const getLocalStorage = ()=>{
  let list = localStorage.getItem("list");
  console.log(list);

  if(list){
    list = JSON.parse(localStorage.getItem("list"));
  }
  else{
    list = [];
  }
  return list
}

const setLocalStorage = (items) =>{
  localStorage.setItem("list", JSON.stringify(items));
}

const defaultList = JSON.parse(localStorage.getItem("list") || "[]");
//this code from here is for formTwo.jsx and it ends here

function App() {

 
  const [count, setCount] = useState(0)


//this code from here is for formTwo.jsx and it starts here
const [items, setItems] = useState(defaultList);

const addItem = (itemName)=>{
    const newItem = {
        name:itemName,
        completed: false,
        id: Date.now()
    }

    // setItems([...items, newItem]);

    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
}


const removeItem = (itemId)=>{
  const newItems = items.filter((item) => item.id !== itemId);
  setItems(newItems);
  setLocalStorage(newItems);
}

const editItem = (itemId) =>{
  const newItems = items.map((item)=>{
    if (itemId === itemId){
      const newItem = {...item, completed:!item.completed};
      return newItem;
    }
    return item;
  });
    setItems(newItems);
  setLocalStorage(newItems);
}
//this code from here is for formTwo.jsx and it ends here

  return (
    <>
     
      <div className='container'>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>

      {/* <TheState/> */}
      {/* <Second/> */}
      {/* <UseStateObject/> */}
      {/* <ControlledInputs/> */}
      {/* <UserChallenge/> */}
      {/* <MultipleInputs/> */}
      {/* <UncontrolledInputs/> */}
      {/* <BirthDay/> */}
      {/* <EightPrevNext/> */}
      {/* <Accordion/> */}
      {/* <Carousel/> */}

    {/* This is for glocerybud and it starts here */}
      {/* <section className='form-in-app'>
    <FormTwo addItem={addItem}/>
    <ItemOne items={items} removeItem={removeItem} editItem={editItem}/>
      </section> */}
    {/* This is for glocerybud and it ends here */}


{/* the calling from here are for the files in this-is-for-navbar-work */}
<section>
  <FirstNav/>
</section>

      </div>
   
    </>
  )
}

export default App
