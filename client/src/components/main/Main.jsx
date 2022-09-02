import React from 'react';
import { useSelector } from 'react-redux';
import NotAuth from '../auth/NotAuth';
import Welcome from '../auth/Welcome';

export default function Main() {
  const { auth } = useSelector((state) => state);
  return (
    <div>
      {auth
        ? (
          <Welcome />
        ) : <NotAuth />}

    </div>
  );
}
