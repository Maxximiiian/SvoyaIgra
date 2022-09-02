import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getquest_THUNK } from '../../redux/actions/questAction';
import Modal from './Modal';

export default function Game() {
  const [modal, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const { quest } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getquest_THUNK());
  }, []);

  return (
    <div className="mx-auto mt-5 pt-5 w-75">
      <form className="container zal mt-5  rounded-3 py-3 px-3 item" align="center">
        <table className="table">
          {quest.category?.map((elC) => (
            <tbody key={elC.id}>
              <tr>
                <td className="border border-danger" key={elC.id}>{elC.name}</td>
                {quest.allQuestion?.map((elQ) => {
                  if (elQ.cat_id === elC.id) {
                    return (
                      <td
                        key={elQ.id}
                        className="border border-danger"
                      >
                        <div
                          className={`${elQ.status} `}
                          onClick={() => {
                            setModal(true);
                            setModalProps(elQ);
                          }}
                        >
                          <h2>
                            {elQ.score}
                          </h2>
                        </div>
                      </td>
                    );
                  }
                })}
              </tr>
            </tbody>
          ))}
        </table>
      </form>
      {modal ? <Modal modalProps={modalProps} setModal={setModal} /> : null}
    </div>
  );
}
