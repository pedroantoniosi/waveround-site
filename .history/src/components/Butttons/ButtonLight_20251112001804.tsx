import styles from "./Index.module.css";

interface ButtonProps {
  text?: string;
  className?: string;
}

const BtnLight = ({ text }, { className }: ButtonProps) => {
  return (
    <>
      <button className={styles["btn-light"]}>{text}</button>
    </>
  );
};

export default BtnLight;
