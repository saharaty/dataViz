import styles from "./App.module.pcss";
import SlideContainer from "./components/SlideContainer.jsx";
import SlideOne from "./components/slides/SlideOne.jsx";
import SlideTwo from "./components/slides/SlideTwo.jsx";
import SlideThree from "./components/slides/SlideThree.jsx";
import SlideFour from "./components/slides/SlideFour.jsx";
import SlideFive from "./components/slides/SlideFive.jsx";
import SlideIndicator from "./components/SlideIndicator.jsx";
import { useRef } from "react";

const App = () => {
  const containerRef = useRef();
  return (
    <div className={styles.container} ref={containerRef}>
      <SlideIndicator scrollableRef={containerRef} />
      <SlideContainer>
        <SlideOne />
      </SlideContainer>
      <SlideContainer>
        <SlideTwo />
      </SlideContainer>
      <SlideContainer>
        <SlideThree />
      </SlideContainer>
      <SlideContainer>
        <SlideFour />
      </SlideContainer>
      <SlideContainer>
        <SlideFive />
      </SlideContainer>
    </div>
  );
};

export default App;
