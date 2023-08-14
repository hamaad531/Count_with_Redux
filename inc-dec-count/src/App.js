import "./styles.css";
import Counter from "./components/counter";
//import {store} from './redux/store';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <button onClick={e => dispatch({ type: 'Increament' })}>Increament</button>

      <Counter />

      <button onClick={e => dispatch({ type: 'decreament' })}>decreament</button>
    </div>
  )
}
export default App
