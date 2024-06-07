import styles from "./SlideContainer.module.pcss";

const SlideContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default SlideContainer;
