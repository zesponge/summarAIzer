import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [itemText, setItemText] = useState('')

  const addItem = async (e) => {
    e.preventDefault()
    try{
      //const res = await axios.post('http://localhost:5500/api/item', {item: itemText}) //add url to database
      const api_call = 'http://127.0.0.1:5000/summarize?url=' + itemText
      console.log(api_call)
      const res2 = await axios.get(api_call) //call the api to summarize the url
      //console.log(res)
      console.log(res2)
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
