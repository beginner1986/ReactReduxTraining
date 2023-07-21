import { Outlet } from 'react-router-dom';
import './styles.css';
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
