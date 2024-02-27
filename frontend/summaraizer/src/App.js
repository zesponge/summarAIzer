import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [itemText, setItemText] = useState('')
  const [itemsList, setItemsList] = useState([])
  const [summary, setSummary] = useState('') //add state for summary

  const summarize = async (e) => {
    e.preventDefault()
    try{
      const api_call = 'http://127.0.0.1:5000/summarize?url=' + itemText
      const res = await axios.post('http://localhost:5500/api/item', {item: itemText}) //add url to database
      const summary = await axios.get(api_call) //call the api to summarize the url
      setSummary(summary.data) //set the summary state to the summary data
      const allItems = await axios.get('http://localhost:5500/api/items')

      setItemsList(allItems.data.reverse().slice(0, 5))
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const getItemsList = async () => {
      try{
        const allItems = await axios.get('http://localhost:5500/api/items')

        setItemsList(allItems.data.reverse().slice(0, 5))
      } catch(err) {
        console.log(err)
      }
    }
    getItemsList()
  },[])


  return (
    <div className="App">
      <div className='header'>
        <h1>Summar<span className='black'>AI</span>zer</h1>
      </div>
      <div className='body'>
        <form className='formclass' onSubmit={e => summarize(e)}>
          <input className="inputbox" type='text' placeholder='enter URL' onChange={e => {setItemText(e.target.value)}} value={itemText}></input>
          <button className='submitButton'>Summarize</button>
        </form>
        <div className='summarizebody'>
          <div className='lebron'>
            <p className='subhead'>Summary</p>
            <p id="" className="summarybox" type='text' placeholder=''>{summary}</p>
          </div>
          <div className='lebron'>
          <p className='subhead'>Previously Summarized Videos</p>
          {
            itemsList.map((item) => {
              return( 
                <div className='databody'>
                  <p>{item.item}</p>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
