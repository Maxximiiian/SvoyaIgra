import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="mx-auto mt-5 pt-5 w-50">
      <form className="container zal mt-5 pt-5 rounded-3 py-3 item" align="center">
        <div className="mb-3">
          <h2>Auth...</h2>
        </div>
        <div className="mx-auto mt-5">
          <h2>Auth</h2>
          <div>
            <Link to="/game" className="btn btn-danger">GAME</Link>
          </div>
          <div className="pt-3">
            {/* <Link to="/registration" className="btn btn-danger">Registration</Link> */}
          </div>
        </div>
      </form>
    </div>
  );
}
