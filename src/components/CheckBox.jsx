import styles from './CheckBox.module.css';

function CheckBox() {
    return(
        <input type="checkbox" className={styles.checkBox} />
    );
}

export default CheckBox;