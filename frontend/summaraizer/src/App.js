import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [itemText, setItemText] = useState('')

  const addItem = async (e) => {
    e.preventDefault()
    try{
      const res = await axios.post('http://localhost:5500/api/item', {item: itemText})
      console.log(res)
    } catch(err) {
      console.log(err)
    }

  }


  return (
    <div className="App">
      <div className='header'>
        <h1>Summar<span className='black'>AI</span>zer</h1>
      </div>
      <div className='body'>
        <form className='formclass' onSubmit={e => addItem(e)}>
          <input className="inputbox" type='text' placeholder='enter URL' onChange={e => {setItemText(e.target.value)}} value={itemText}></input>
          <button className='submitButton' >Summarize</button>
        </form>
        <p className='subhead'>Summary</p>
        <input id="" className="summarybox" type='text' placeholder=''></input>
      </div>
    </div>
  );
}

export default App;
