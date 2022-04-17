import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store, { updateNewMessageText, updateNewPostText } from './redux/state';

function App(props) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.NavbarElement}/>
        <div class='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={<Profile ProfilePage={props.state.ProfilePage} dispatch={props.dispatch}/>} />
            <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}




export default App;
