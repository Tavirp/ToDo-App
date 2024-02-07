import styles from './NavigationBar.module.css'
import LoginBtn from './LoginButton/LoginBtn';
import SignupBtn from './SignupButton/SignupBtn';


function NavBottom() {
    return (
<div className={styles.pagescontainer}>

                <LoginBtn/>
                <SignupBtn/>
                
</div>
  );
}

export default NavBottom;