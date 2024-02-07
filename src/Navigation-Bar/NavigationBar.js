import styles from "./NavigationBar.module.css";
// import NavBarTop from "./NavTop/NavbarTop";
// import NavBarBottom from "./NavBottom/NavbarBottom";

function NavigationBar() {
  return (
    <div className={`${styles.mainContainer} border-bottom-shadow`}>
      {/* <NavBarTop />
      <NavBarBottom /> */}
      <p>Blabla, test</p>
    </div>
  );
}

export default NavigationBar;