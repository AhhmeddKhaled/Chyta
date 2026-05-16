import styles from "./Layout.module.css";
import Main from "../main/Main";
import Sidebar from "../sidebar/Sidebar";

export default function Layout() {

  return (

    <div className={styles.layout}>

      <Sidebar />

      <Main />

    </div>

  );
}