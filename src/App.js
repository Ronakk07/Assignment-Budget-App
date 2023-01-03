import { useState } from "react";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState([]);
  const [rate, setRate] = useState([]);
  const [quantityForSell, setQuantityForSell] = useState([]);
  const [rateForSell, setRateForSell] = useState([]);
  const [isbuy, setIsBuy] = useState(true);

  const submitQuantityAndRateForBuy = () => {
    let max = 36000;
    let min = 35000;
    let randomNumbersForQuantity = Math.floor(Math.random() * 10);
    setQuantity((current) => [...current, randomNumbersForQuantity].join("\n"));

    // /*  Calculating the random numbers between range of 35000 to 36000 */
    let randomNumbersForRate = Math.floor(
      Math.random() * (max - min + 1) + min
    );
    setRate((current) => [...current, randomNumbersForRate]);
  };

  const submitQuantityAndRateForSell = () => {
    setIsBuy(false);
    let max = 36000;
    let min = 35000;
    let randomNumbersForQuantity = Math.floor(Math.random() * 10);
    setQuantityForSell((current) =>
      [...current, randomNumbersForQuantity].join("\n")
    );

    // /*  Calculating the random numbers between range of 35000 to 36000 */
    let randomNumbersForRate = Math.floor(
      Math.random() * (max - min + 1) + min
    );
    setRateForSell((current) => [...current, randomNumbersForRate]);
  };

  return (
    <div className="App">
      <div className="btn-wrapper">
        <button type="button" onClick={submitQuantityAndRateForBuy}>
          Buy
        </button>
        <button type="button" onClick={submitQuantityAndRateForSell}>
          Sell
        </button>
      </div>
      <br />
      <div className="container">
        <div className="buy">
          <section>Buy</section>
          <div
            style={{
              color: "green",
              backgroundColor: "black",
            }}
          >
            <p>{quantity}</p>
            <p>{rate}</p>
          </div>
        </div>
        <div className="sell">
          <section>Sell</section>
          <div
            style={{
              color: "red",
              backgroundColor: "black",
            }}
          >
            <p>{quantityForSell}</p>
            <p>{rateForSell}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
