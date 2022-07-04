import React from "react";
import { useState } from "react";
import { winnerCalculate } from "../helper";
import Board from "./Board";
import "./GameStyle.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true); // true thì sẽ đánh X, false sẽ đánh O
  const winner = winnerCalculate(board);
  const handleClick = (index) => {
    const boardCopy = [...board]; // copy cái board ra thành một mảng mới
    // tại sao lại làm như vậy u may ask ??
    // bởi vì mình đang dùng cái state ban đầu (board) và sau khi bạn đã học đến by references trong mảng
    // bạn sẽ biết rằng là khi ta thay đổi giá trị trong mảng thì nó sẽ ảnh hưởng đến giá trị gốc
    // vì vậy ta phải tạo ra một bản copy để đề phòng trường hợp đó xảy ra
    if (winner || boardCopy[index]) {
      // nếu đã có người chiến thắng (winner === X hoặc winner === O ), hoặc ô vuông đã được nhấn thì không cho nhấn nữa
      // nếu không có điều kiện boardCopy[index] = true thì khi nhấn tiếp lại vào ô vuông đó
      // sẽ xảy ra một lỗi là ô vuông sẽ chuyển X O luân phiên (tùy theo giá trị boolean của xIsNext trong state)
      console.log("Hello");
      return;
    }
    // boardCopy[index] = xIsNext ? "X" : "O"; // nếu điều kiện if đã return rồ
    // Viết kiểu dài dòng
    if (xIsNext === true) {
      boardCopy[index] = "X";
    } else {
      boardCopy[index] = "O";
    }
    setBoard(boardCopy);
    console.log(boardCopy);
    setXIsNext((xIsNext) => !xIsNext);
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      {winner ? `Winner is ${xIsNext ? "O" : "X"}` : ""}
    </div>
  );
};

export default Game;
