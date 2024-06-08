import Candles from "../Candles.jsx";

const TOTAL_YEARS = 71;

const SlideOne = () => {
  return (
    <>
      <h2>How much time you have?</h2>
      <Candles count={TOTAL_YEARS} />
      <p>
        Based on{" "}
        <a
          href="https://population.un.org/wpp/Download/Standard/Population/"
          rel="noreferrer noopener"
        >
          UN data
        </a>{" "}
        for 2021, on average people are expected to live {TOTAL_YEARS} years.
      </p>
    </>
  );
};

export default SlideOne;
