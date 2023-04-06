import './App.css';
import Login from './componets/Login';
import HeadNavbar from './componets/HeadNavbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './componets/Detail';
import { Provider } from 'react-redux';
import store from './componets/store/Store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <HeadNavbar />
          <Routes>
            <Route path='/' element={<Login />} ></Route>
            <Route path='/details' element={<Detail />} ></Route>
            <Route path='/user' element={<Login />} ></Route>
          </Routes>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
