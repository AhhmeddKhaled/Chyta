import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { FaHome, FaBoxOpen, FaUsers, FaChartBar } from "react-icons/fa";    

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>    

            <h2 className={styles.logo}>Admin Panel</h2>

            <nav className={styles.nav}>    
                <ul>
                    <li>
                        <Link to="/admin">  
                            <FaHome className={styles.icon} />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/products">
                            <FaBoxOpen className={styles.icon} />
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/users">
                            <FaUsers className={styles.icon} />
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/orders">
                            <FaChartBar className={styles.icon} />
                            Orders
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
