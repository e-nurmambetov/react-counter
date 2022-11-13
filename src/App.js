import React, {useState} from 'react';
import './styles/App.css';

function App() {
  const [likes, setLikes] = useState(5);
  const [value, setValue] = useState('');

  function increment() {
    setLikes(likes + 1)
  };

  function decrement() {
    setLikes(likes - 1)
  };

  function newTitle(e) {
    // e.preventDefault();
    setValue('');
  }
  return (
    <div className='app'>
      

      <input 
      onChange={e => setValue(e.target.value)}
      type='text'
      placeholder='ФИО'
      value={value}
      />
      <button onClick={newTitle}>Press</button>
      <h1 className='name'>
        Name: <div className='text'>{value}</div>
        </h1>
      
      
      <h1 className='button'>{likes}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      
    </div>
  );
}

export default App;
