import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  const deductNumber = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const addNumber = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="countProd">
      <button onClick={deductNumber}>
        <i className="fa-solid fa-circle-minus"></i>
      </button>
      <p>{count}</p>
      <button onClick={addNumber}>
        <i className="fa-solid fa-circle-plus"></i>
      </button>
    </div>
  );
};

export default ItemCount;
