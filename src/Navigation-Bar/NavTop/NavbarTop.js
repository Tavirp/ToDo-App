import StandardBtn from "../../Stuff/Buttons/StdBtn";
import styles from "./NavbarTop.module.css";
import UsrIcon from "../../Stuff/UsrIcon";

function NavBarTop() {
  return (
    <div className={styles.topContainer}>
      <div className={styles.spacer} />  
        <UsrIcon />
      <div className={styles.spacer} />
        <StandardBtn text={"Login"} />
      <div className={styles.spacer} />
        <StandardBtn text={"Sign Up"} />
    </div>
  );
}

export default NavBarTop;