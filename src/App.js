import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<Profile
              newPost={props.state.profilePage.newPost}
              addPost={props.addPost} />} />
            <Route path="/dialogs/*" element={
              <Dialogs dialogsData={props.state.messagePage.dialogsData}
                messagesData={props.state.messagePage.messagesData} />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/setting/*" element={<Setting />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;