import styles from "./Candles.module.pcss";
import candle from "../assets/candle.svg";

const Candles = ({ count }) => {
  return (
    <div className={styles.container}>
      {new Array(Math.floor(count)).fill(0).map((_, index) => (
        <img key={index} src={candle} alt="candle" />
      ))}
    </div>
  );
};

export default Candles;
