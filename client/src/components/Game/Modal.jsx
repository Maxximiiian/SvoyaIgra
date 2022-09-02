import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

export default function Modal({ active, setActive }) {
  const clickHandler = () => {
    // setActive(false);
  };

  return (
    <div className="modal">
      <div className="modal-content w-50 h-50 item">

        <form className="container my-auto" align="center">
          <div className="mb-3">
            <h2>Question</h2>
          </div>
          <div className="mt-5">
            <h2>URL?</h2>
          </div>
          <div className="mt-5 w-50 mx-auto pb-3">
            <input
            //   onChange={changeHandler}
              type="text"
              name="answer"
              className="form-control"
              id="Answer"
              placeholder="Your Answer"
            />
          </div>
          <LoadingButton
            onClick={clickHandler}
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
