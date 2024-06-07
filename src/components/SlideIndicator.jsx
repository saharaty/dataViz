import styles from "./SlideIndicator.module.pcss";
import { useEffect, useRef, useState } from "react";

const SlideIndicator = ({ scrollableRef }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const indicatorRef = useRef();
  const goToPage = (pageNumber) => {
    scrollableRef.current.scrollTop =
      (pageNumber - 1) * scrollableRef.current.clientHeight;
  };

  useEffect(() => {
    const moveIndicator = () => {
      const indexRect = document
        .querySelector("." + styles.active)
        .getBoundingClientRect();
      indicatorRef.current.style.width = `${indexRect.width}px`;
      indicatorRef.current.style.height = `${indexRect.height}px`;
      indicatorRef.current.style.transform = `translate3d(${indexRect.left}px, ${indexRect.top}px, 0px)`;
    };

    const scrollListener = (e) => {
      setActiveIndex(
        Math.round(e.target.scrollTop / e.target.clientHeight) + 1,
      );

      moveIndicator();
    };

    moveIndicator();

    scrollableRef.current.addEventListener("scroll", scrollListener);
    scrollableRef.current.addEventListener("resize", scrollListener);
    return () => {
      scrollableRef.current?.removeEventListener("scroll", scrollListener);
      scrollableRef.current?.removeEventListener("resize", scrollListener);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.indicator} ref={indicatorRef} />
      <button
        onClick={() => goToPage(1)}
        className={activeIndex === 1 ? styles.active : ""}
      >
        I
      </button>
      <button
        onClick={() => goToPage(2)}
        className={activeIndex === 2 ? styles.active : ""}
      >
        II
      </button>
      <button
        onClick={() => goToPage(3)}
        className={activeIndex === 3 ? styles.active : ""}
      >
        III
      </button>
      <button
        onClick={() => goToPage(4)}
        className={activeIndex === 4 ? styles.active : ""}
      >
        IV
      </button>
      <button
        onClick={() => goToPage(5)}
        className={activeIndex === 5 ? styles.active : ""}
      >
        V
      </button>
    </div>
  );
};

export default SlideIndicator;
