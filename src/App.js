import {useState} from 'react';
import './App.css';
import Notifier from './notifier';

function App() {

  const [ count , setCount ] = useState(1);
  const [isMorning, setMorning]= useState(true);
  return (
    <div className={`box ${isMorning ? 'day' : ''  } `}>
      <Notifier counter={`count is ${count}`} />
      <Notifier counter={`Morning is ${isMorning}`} />
      <button onClick={
        ()=> setCount(count + 1)
      }
      >
              Update Counter
      </button>
      <button onClick={
        ()=> setMorning(!isMorning)
      }
      >
              Update Day
      </button>
    
    </div>
  );
}

export default App;
