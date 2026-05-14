import Container from "../container/Container";
import style from "./Header.module.css";
import { FaUserAlt } from "react-icons/fa";

export default function Header() {
    return (
        <header className={style.header}>
            <Container>
                <h2>Chyta</h2>

                <nav className={style.nav}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li className={style.login}><a href="/login">Login <span><FaUserAlt /></span></a></li>
                    </ul> 
                </nav>

            </Container>
        </header>
    );
}   