import React, { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

export default function Modal({ modalProps, setModal }) {
  const [input, setInput] = useState({ answer: '' });
  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  //   console.log(modalProps);

  const submitHandler = (e) => {
    // console.log(modalProps.answer, '=========', input);
    e.preventDefault();
    if (modalProps.answer === input.answer) {
      modalProps.status = true;
      setModal(false);
    } else {
      modalProps.status = false;
      setModal(false);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content w-50 h-50 item">

        <form className="container my-auto" align="center" onSubmit={submitHandler}>
          <div className="mb-3">
            <h2>{modalProps.body}</h2>
          </div>
          <div className="mt-5 w-50 mx-auto pb-3">
            <input
              onChange={changeHandler}
              type="text"
              name="answer"
              className="form-control"
              id="Answer"
              placeholder="Your Answer"
            />
          </div>
          <LoadingButton
            // onClick={clickHandler}
            type="submit"
            endIcon={<SendIcon />}
            //   loading={loading}
            loadingPosition="end"
            variant="contained"
            color="secondary"
          >
            Answer
          </LoadingButton>

        </form>

      </div>
    </div>
  );
}
