import React from 'react';
import Modal from './Modal';

export default function Game() {
  
  return (
    <>
      <main>
        <h1>Game</h1>
        <div className="Game-table">
          <table className="table">
            {category?.map((elC) => (
              <tr key={elC.id}>
                <td>{elC}</td>
                {question?.map((elQ) => {
                  if (elQ.cat_id === elC.id) {
                    <td>{elQ.score}</td>;
                  }
                })}
              </tr>
            ))}
          </table>
        </div>
      </main>
      <Modal />
    </>
  );
}
