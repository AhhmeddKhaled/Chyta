import Container from "../container/Container";
import style from "./Footer.module.css";

export default function Footer() {
    return (    
        <footer className={style.footer}>
            <Container>
            <p>Copyright &copy; 2024 Chyta. All rights reserved.</p>
            </Container>
        </footer>
    );
}   

