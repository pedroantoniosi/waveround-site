import styles from "./Index.module.css";

interface ButtonProps {
  text?: string;
}

const BtnLight = ({ text }: ButtonProps) => {
  return (
    <>
      <button className={styles["btn-light m-auto"]}>{text}</button>
    </>
  );
};

export default BtnLight;
