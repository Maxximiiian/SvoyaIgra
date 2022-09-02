import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getquest_THUNK } from '../../redux/actions/questAction';
import Modal from './Modal';

export default function Game() {
  const category = ['a', 's', 'f', 'g', 'j'];
  const question = ['a', 's', 'f', 'g', 'j', 'y'];

  const { quest } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getquest_THUNK());
  }, []);

  return (
    <div className="mx-auto mt-5 pt-5 w-75">
      <form className="container zal mt-5  rounded-3 py-3 px-3 item" align="center">
        <table className="table">
          {/* {quest.category?.map((el) => (
            <div className="row">
              {question?.map((x) => (
                <div className="col-sm col border border-danger">
                  Одна из трёх колонок
                  <span />
                  {x}
                </div>
              ))}
            </div>
          ))} */}

          {quest.category?.map((elC) => (
            // <tbody key={elC.id}>
            <tr key={elC.id}>
              <td>{elC.name}</td>
              {quest.allQuestion?.map((elQ) => {
                if (elQ.cat_id === elC.id) {
                  return <td>{elQ.score}</td>;
                }
              })}
            </tr>
            // </tbody>
          ))}

        </table>
      </form>
      {/* <Modal /> */}
    </div>
  );
}
