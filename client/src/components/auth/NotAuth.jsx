import React from 'react';
import { Link } from 'react-router-dom';

export default function NotAuth() {
  return (
    <div className="mx-auto mt-5 pt-5 w-50">
      <form className="container zal mt-5 pt-5 rounded-3 py-3 item" align="center">
        <div className="mb-3">
          <h2>You are not auth...</h2>
        </div>
        <div className="mx-auto mt-5">
          <h2>To play SUPA SI GAME please Auth or Register</h2>
          <div>
            <Link to="/auth" className="btn btn-danger">Auth</Link>
          </div>
          <div className="pt-3">
            <Link to="/registration" className="btn btn-danger">Registration</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
