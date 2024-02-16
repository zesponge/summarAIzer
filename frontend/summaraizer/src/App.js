import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="enter URL"/>
        <button type="submit">Summarize</button>
      </form>
      <div className="todo-listItems">
        <div className="todo-item">
          <p>this is item 1</p>
          <button>update</button>
          <button>delete</button>
        </div>
        <div className="todo-item">
          <p>this is item 1</p>
          <button>update</button>
          <button>delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
