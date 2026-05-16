import styles from './Main.module.css';
import { Outlet } from "react-router-dom";

export default function Main() {
    return (
        <div className={styles.main}>
            <Outlet />
        </div>
    )
}