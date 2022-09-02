import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CircleLoader from 'react-spinners/CircleLoader';
import './App.css';
import Auth from './components/auth/Auth';
import Registration from './components/auth/Registration';
import Game from './components/Game/Game';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import { setAuth } from './redux/actions/authActions';
import { unsetLoad } from './redux/actions/loadActions';

function App() {
  const { loading } = useSelector((s) => s);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:3002/auth', {
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then((data) => {
        if (data) {
          dispatch(setAuth(data));
          dispatch(unsetLoad());
        } else {
          dispatch(unsetLoad());
        }
      });
  }, []);

  return (
    <div>
      {loading ? (
        <CircleLoader
          color="#c800fa"
          size={200}
          cssOverride={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="*" element={<Main />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
