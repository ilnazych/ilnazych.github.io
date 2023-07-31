import './App.css'
import { Main } from './components/main/Main';
import { Provider } from 'react-redux';
import { store } from './store';
import { Help } from './components/help/Help';
import { Route, Routes } from 'react-router-dom';
import { Stats } from './components/stats/Stats';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/help' element={<Help />} />
          <Route path='/stats' element={<Stats />} />
        </Routes>
      </Provider>
    </>
  )
}

export default App
