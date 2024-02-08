
import StandardBtn from "../../Stuff/Buttons/StdBtn";
import styles from "./NavbarBottom.module.css";

function NavBarBottom() {
  return (
    <div className={styles.bottomContainer}>
      <StandardBtn text={"Undefined"} />
      <div className={styles.spacer} />
      <StandardBtn text={"Don't know yet"} />
      <div className={styles.spacer} />
      <StandardBtn text={"Contact"} />
      <div className={styles.spacer} />
      <StandardBtn text={"Impressum"} />
      <div className={styles.spacer} />
    </div>
  );
}

export default NavBarBottom;