import styles from './NavigationBar.module.css'
import LoginBtn from './LoginButton/LoginBtn';
import SignupBtn from './SignupButton/SignupBtn';


function NavTop() {
    return (
<div className={styles.doppelfrosch}>

                <LoginBtn/>
                <SignupBtn/>
                
</div>
  );
}

export default NavTop;