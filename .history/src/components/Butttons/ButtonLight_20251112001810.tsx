import styles from "./Index.module.css";

interface ButtonProps {
  text?: string;
  className?: string;
}

const BtnLight = ({ text }: ButtonProps) => {
  return (
    <>
      <button className={styles["btn-light"]}>{text}</button>
    </>
  );
};

export default BtnLight;
