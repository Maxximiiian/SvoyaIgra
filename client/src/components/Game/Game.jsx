import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Modal from './Modal';

export default function Game() {
  const category = ['a', 's', 'f', 'g', 'j'];
  const question = ['a', 's', 'f', 'g', 'j', 'y'];

  const dispatch = useDispatch();

  fetch('http://localhost:3002/questions')
    .then((res) => res.json())
    .then((res) => { console.log(res); });

  return (
    <div className="mx-auto mt-5 pt-5 w-75">
      <form className="container zal mt-5  rounded-3 py-3 px-3 item" align="center">
        <table className="table">
          {category?.map((el) => (
            <div className="row">
              {question?.map((x) => (
                <div className="col-sm col border border-danger">
                  Одна из трёх колонок
                  <span />
                  {x}
                </div>
              ))}
            </div>
          ))}

        </table>
      </form>
      {/* <Modal /> */}
    </div>
  );
}
