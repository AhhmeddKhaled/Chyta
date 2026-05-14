import style from "./Button.module.css";

export default function Button({ onClick , children}) {
    return (
        <button className={style.btn} onClick={onClick}>
            {children}
        </button>
    );
}   